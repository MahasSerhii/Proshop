import React from "react";
import { FaTimes, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Button, Col, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { LinkContainer } from "react-router-bootstrap";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../slices/usersApiSlice";

const UserListScreen = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete user?")) {
      try {
        await deleteUser(id);
        refetch();
        toast.success("User was deleted");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
    await deleteUser(id);
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Users</h1>
        </Col>
      </Row>
      {/* {loadingCreate ? <Loader /> : null} */}
      {loadingDelete ? <Loader /> : null}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td> {user._id} </td>
                  <td> {user.name} </td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email} </a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => {
                        deleteHandler(user._id);
                      }}
                    >
                      <FaTrash color="white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default UserListScreen;
