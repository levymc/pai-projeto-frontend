import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

interface FirstPostProps {
  fixedPost: {
    id: number;
    title: string;
    extractedText: string;
    img: string;
  };
}

const FirstPost: React.FC<FirstPostProps> = ({ fixedPost }) => {
  const [truncatedText, setTruncatedText] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTruncatedText(limitText(fixedPost?.extractedText, 400));
  }, [fixedPost?.extractedText]);

  const limitText = (text: string | undefined, maxLength: number): string => {
    if (!text || text.length <= maxLength) {
      return text || '';
    }

    const substring = text.substring(0, maxLength - 3);
    return substring + ' ...';
  };

  return (
    <>
      <SCFirstPost>
        <img src={fixedPost?.img} alt="First Post" />
        <div className="divPost">
          <div className="title">
            <h2>{fixedPost?.title}</h2>
          </div>
          <p>{truncatedText}</p>
          <Link href={`/post/${fixedPost?.id}`}>
            Leia mais...
          </Link>
        </div>
      </SCFirstPost>
    </>
  );
};

const SCFirstPost = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 60px;
  width: 80rem;
  margin-bottom: 4em;
  height: 380px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  img {
    width: 380px;
    height: 380px;
    border-radius: 10px;
  }

  .divPost {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    max-height: 300px;
    width: 800px;
  }

  .title {
    width: 100%;
  }

  p {
    word-wrap: wrap;
    letter-spacing: 0.75px;
    word-spacing: 1px;
    line-height: 20px;
  }

  a {
    width: 100%;
    text-decoration: none;
  }
`;

export default FirstPost;
