import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../contexts/AppContext";
import { Button } from "@mui/material";

export default function Menu() {
  const { setOpenNewPost } = useAppContext();
  const handleOpenNewPost = (name: string) => setOpenNewPost(name);

  return (
    <Container>
      <DivButton>
        <Button
          onClick={() => handleOpenNewPost("newPost")}
          sx={{
            color: "white",
            ":hover": {
              color: "#62a1b4",
            },
          }}
        >
          Nova Postagem
        </Button>
      </DivButton>
      <DivButton>
        <Button
          onClick={() => handleOpenNewPost("setFixedPost")}
          sx={{
            color: "white",
            ":hover": {
              color: "#62a1b4",
            },
          }}
        >
          Editar Posts
        </Button>
      </DivButton>
      <DivButton>
        <Button
          onClick={() => handleOpenNewPost("siteConfig")}
          sx={{
            color: "white",
            ":hover": {
              color: "#62a1b4",
            },
          }}
        >
          Configurações
        </Button>
      </DivButton>
    </Container>
  );
}

const DivButton = styled.div`
  border-bottom: solid 0.25px #dbdbdb64;
  transition: color 0.3s;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  padding: 20px;
  max-width: 150px;
  top: 0;
  left: 0;
  min-height: 100%;
  background-color: #333;
`;
