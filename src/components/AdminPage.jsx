import React, { useState, useEffect } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(usersList);
      } catch (err) {
        setError("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const userDoc = doc(firestore, "users", userId);
      await updateDoc(userDoc, { role: newRole });
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? { ...user, role: newRole } : user))
      );
      setSuccess("User role updated successfully");
    } catch (err) {
      setError("Failed to update user role");
    }
  };

  return (
    <Container>
      <h1 className="text-center customcolor mt-2 ">Home Amministratore</h1>
      <h3 className="text-center  mb-2">Questa è la lista completa degli utenti del sito</h3>
      <h5 className="text-center  mb-2">
        *Solo un Admin può scegliere se promuovere o declassare un utente oltre ad aggiungere e
        rimuovere i risultati delle partite (di Europa League o Serie A).
      </h5>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>E-mail utente</th>
            <th>Ruolo</th>
            <th>Rimuovi o Promuovi ad Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleRoleChange(user.id, "admin")}
                  disabled={user.role === "admin"}
                  className="me-1 "
                >
                  Promuovi ad Admin
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleRoleChange(user.id, "user")}
                  disabled={user.role === "user"}
                >
                  Rimuovi da Admin
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPage;
