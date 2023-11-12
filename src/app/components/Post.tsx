import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

interface PostProps {
  title: string;
  extractedText?: string;
  img: string;
  postId: number;
}

const Post: React.FC<PostProps> = ({ title, img, postId, extractedText }) => {
  const [truncatedText, setTruncatedText] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTruncatedText(limitText(extractedText, 400));
  }, [extractedText]);

  const limitText = (text: string | undefined, maxLength: number): string => {
    if (!text || text.length <= maxLength) {
      return text || '';
    }

    const substring = text.substring(0, maxLength - 3);
    return substring + ' ...';
  };

  return (
    <ContainerPost>
      <img src={img} height={100} alt="Post Image" />
      <DivTexto>
        <PostTitle>{title}</PostTitle>
        <PostText>{truncatedText}</PostText>
      </DivTexto>
      <DivLink>
        {/* <Link href={`/post/${postId}`}>
          <a>Leia mais...</a>
        </Link> */}
      </DivLink>
    </ContainerPost>
  );
};

const DivLink = styled.div`
  width: 100%;
  margin-right: 20px;
  font-size: 13px;
  position: relative;

  a {
    position: absolute;
    right: 15px;
    text-decoration: none;
  }
`;

const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 20px;
  width: 250px;
  height: 280px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  width: calc(300px - 2em);
  max-width: calc(300px - 2em) !important;
  height: 150px;
  max-height: 150px;
`;

const PostTitle = styled.h2`
  font-weight: 500;
  font-size: 17px !important;
`;

const PostText = styled.p`
  font-size: 13px !important;
  word-break: break-all !important;
`;

export default Post;
