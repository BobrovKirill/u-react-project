import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate } from 'react-router-dom'

export default function Text(props) {
	const {id, title, body} = props.post
	const router = useNavigate()
	
	
	return (
		<div className='post'>
			<div className="post__content">
				<strong>{id}. {title}</strong>
				<div className="">{body}</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={()=> router(`/posts/${id}`)}>Открыть</MyButton>
				<MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div>
	)
}
