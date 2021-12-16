import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

	const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
		fetchComments(params.id)
  }, []);


  return (
    <div>
      <h1>Вы открыли {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
			<h1>Коментарии</h1>
			{isLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(com => 
						<div key={com.id} style={{marginTop: 15}}>
							<h5>{com.email}</h5>
							<div>{com.body}</div>
						</div>
					)}
        </div>
      )}
    </div>
  );
}
