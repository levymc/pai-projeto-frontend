import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Menu from "../../components/Menu";
// import ModalNewPost from "../../components/ModalNewPost";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
// import SetFixedPost from "../../components/SetFixedPost";
// import SiteConfig from "../../components/SiteConfig";

export default function Dashboard() {
  const { openNewPost } = useAppContext();
  const router = useRouter();

  // useEffect(() => {
  //   // Verifica se o código está sendo executado no navegador antes de acessar o localStorage
  //   if (typeof window !== 'undefined') {
  //     const logado = localStorage.getItem('logado');
  //     if (logado !== 'true') {
  //       console.log('Acesso negado');
  //       router.push('sign-in')
  //     }
  //   }
  // }, []);

  const returnDash = () => {
    // switch (openNewPost) {
      // case "newPost":
      //   return <ModalNewPost />;
      // case "setFixedPost":
      //   return <SetFixedPost />;
      // case "siteConfig":
      //   return <SiteConfig />;
      // default:
    //     return null;
    // }
  };

  return (
    <>
      {false ? (
        "acesso negado"
      ) : (
        <>
          <Container>
            {/* <NavBar /> */}
            {/* <SCTypography onClick={() => console.log(siteConfig)}  fontFamily={'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'} variant="h4">Dashboard</SCTypography> */}
            {/* <Menu /> */}
            {openNewPost}
            {/* {openNewPost ? (
              // returnDash()
            ) : (
              "Informações sobre a conta do usuário"
            )} */}
          </Container>
        </>
      )}
    </>
  );
}

// const SCTypography = styled(Typography)`
//   position: absolute;
//   top: -20px;
//   left: 0;
//   z-index: 999;
// `

const Container = styled.div`
  overflow-y: hidden !important;
  margin-top: 140px;
  margin-bottom: 150px;
  /* padding-top: 100px; */
  padding: 30px;
  padding-left: 220px;
  min-height: 600px;
  height: 100%;
  min-width: 1000px;
  overflow-y: auto;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
