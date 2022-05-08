import React from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import './card.css';

const Card = ({ post, socket, username }) => {
  const [liked, setLiked] = React.useState(false);

  const handleNotification = (type) => {
    setLiked(true);
    socket.emit('sendNotification', {
      senderName: username,
      receiverName: post.name,
      type,
    });
  };
  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt='profile img' className='userImg' />
        <span>{post.name}</span>
      </div>
      <div className='postContent'>
        <h4 className='postTitle'>{post.title}</h4>
        <img src={post.postImg} alt={post.title} className='postImg' />
      </div>
      <div className='interaction'>
        {!liked ? (
          <AiOutlineHeart
            size={20}
            className='cardIcon'
            onClick={() => handleNotification(1)}
          />
        ) : (
          <AiFillHeart color='red' size={20} className='cardIcon cardFilled' />
        )}
        <AiOutlineComment
          size={20}
          className='cardIcon'
          onClick={() => handleNotification(2)}
        />
        <RiShareForwardLine
          size={20}
          className='cardIcon'
          onClick={() => handleNotification(3)}
        />
        <AiOutlineInfoCircle size={20} className='cardIcon infoIcon' />
      </div>
    </div>
  );
};

export default Card;
