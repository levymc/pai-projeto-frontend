"use client"

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '../Post';
import { useCustomRequest } from '@/hooks/useCustomRequest';
import FirstPost from './FirstPost';

interface PostData {
  id: number;
  description: string;
  img: string;
  title: string;
  extractedText: string;
  isFixedPost: boolean;
}

interface FixedPost {
  id: number;
  description: string;
  img: string;
  title: string;
  extractedText: string;
}

export default function BodyPosts() {
  const [allPosts, setAllPosts] = useState<PostData[]>([]);
  const [fixedPost, setFixedPost] = useState<FixedPost>({ id: 0, description: '', img: '', title: '', extractedText: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const customRequest = useCustomRequest();
  async function fetchData() {
    try {
      const response = await customRequest.makeRequest('GET', '/posts');
      const notFixedPosts = response.data.notFixedPosts as PostData[];
      const fixedPost = response.data.fixedPost as FixedPost;

      setAllPosts(notFixedPosts);
      setFixedPost(fixedPost);
    } catch (error) {
      console.error('Erro na HomePage para requisitar os Posts', error);
    }
  }

  return (
    <>
      {allPosts?.length === 0 ? (
        'Loading Posts'
      ) : (
        <>
          <FirstPost fixedPost={fixedPost} />
          <Container>
            <ContainerPots>
              {allPosts?.length > 0 &&
                allPosts.map((post, i) => {
                  if (!post.isFixedPost) {
                    return (
                      <Post
                        postId={post.id}
                        extractedText={post.extractedText}
                        img={post.img}
                        title={post.title}
                        key={i}
                      />
                    );
                  }
                })}
            </ContainerPots>
            <MenuLateral>
              Aqui entram algumas informações extras, como um Sobre rápido....
            </MenuLateral>
          </Container>
        </>
      )}
    </>
  );
}

const ContainerPots = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
`;

const MenuLateral = styled.div`
  width: 20%;
  background-color: azure;
  height: 40em;
  position: absolute;
  right: 0;
  border-radius: 10px;
  padding: 2em;
`;

const Container = styled.div`
  position: relative;
  width: 80rem;
  height: 60em;
`;

