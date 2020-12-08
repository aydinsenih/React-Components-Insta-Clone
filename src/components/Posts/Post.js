import React,{useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost, postComment } = props;
  const [input, setInput] = useState("");
  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes={post.likes}/>
      {/* Comments also wants its props! */}
      <Comments comments={post.comments}/>
      <input placeholder='type your comment' onInput={e => setInput(e.target.value)}/>
      <button onClick={(event) => postComment(post.id, input)} >Send</button>
    </div>
  );
};

export default Post;
