import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "../../api/product";
import { Button, Table, Popconfirm, Input, Space } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters,AiOutlineSearch } from "react-icons/ai";
import { IProduct } from "../../interface/product";
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { InputRef } from 'antd';
import React, { useRef, useState } from 'react';

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleteLoading }] =
    useDeleteProductsMutation();
  if (error) return <div>Error</div>;
  const dataSource = data?.map(({ id, name, price, desc }: IProduct) => {
    return {
      key: id,
      name,
      price,
      desc,
    };
  });
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: dataSource,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex: dataSource): ColumnType<dataSource> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<AiOutlineSearch />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <AiOutlineSearch style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps('name')
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Desc",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Action",
      key: "action",
      render: ({ key: id }: any) => {
        return (
          <>
            <Popconfirm
              placement="topLeft"
              title={"Bạn có muốn xoá sản phẩm?"}
              onConfirm={() => confirm(id)}
              okText="Yes"
              cancelText="No"
            >
              <Button>
                {isDeleteLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "Delete"
                )}
              </Button>
            </Popconfirm>
            <Button type="primary" danger className="ml-2">
              <Link to={`/admin/product/${id}/edit`}>Edit</Link>
            </Button>
          </>
        );
      },
    },
  ];
  const confirm = (id: any) => {
    deleteProduct(id);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">Quản lý Sản phẩm</h2>
        <Button type="primary" danger>
          <Link to="/admin/product/add">Thêm sản phẩm</Link>
        </Button>
      
      </div>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Products;
