"use client";

import { UserOutlined } from "@ant-design/icons";
import type { MenuProps, PaginationProps, TableProps } from "antd";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Pagination,
  Spin,
  Space,
  Table,
} from "antd";

import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [getItem("User", "sub1", <UserOutlined />)];

// async function getUsers() {
//   const res = await fetch(
//     "https://66c40837b026f3cc6cedce52.mockapi.io/api/v1/user"
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   const fetchedData = await res.json();
//   console.log(typeof fetchedData);
//   return fetchedData;
// }

const TestPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  // Fetch data with useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://66c40837b026f3cc6cedce52.mockapi.io/api/v1/user"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const fetchedData = await res.json();
        const formattedData = fetchedData.map((user: any) => ({
          key: user.id,
          name: user.name,
          age: user.age,
          address: user.address || "N/A",
        }));
        setData(formattedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchUsers();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ERROR
  if (error) return <h2 className="text-center mt-8">{error}</h2>;

  // Fetch data with useQuery
  // const { data, error, isFetching } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  // });

  // // ERROR
  // if (error) return <h2>{error.message}</h2>;
  // // LOADING
  // if (isFetching) return <h2 className="text-center mt-8">Loading....</h2>;

  // Calculate the indices for slicing the data based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "User" }, { title: "All" }]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {loading ? (
              // flex  justify-center items-center min-h-screen space-y-4
              <div className="flex flex-col justify-center items-center min-h-[200px] space-y-4">
                <Spin size="large" tip="Loading...">
                  {/* You can add additional content or leave it empty to center the spinner */}
                </Spin>
                <h2 className="text-center text-xl font-semibold text-gray-600">
                  Please wait
                </h2>
              </div>
            ) : (
              <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={false}
              />
            )}
          </div>
          {!loading && (
            <Pagination
              // className="mt-10"
              style={{ marginTop: "2.5rem" }}
              align="center"
              showSizeChanger
              onShowSizeChange={(current, size) => {
                setPageSize(size);
                setCurrentPage(current);
              }}
              onChange={(page) => setCurrentPage(page)}
              current={currentPage}
              total={data.length}
              pageSize={pageSize}
              pageSizeOptions={[10, 20, 30]}
            />
          )}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default TestPage;
