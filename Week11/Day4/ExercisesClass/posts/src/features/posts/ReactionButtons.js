import { addreaction } from "./postsSlice";
import { useDispatch } from "react-redux";
import { memo } from 'react';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    
    const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} className="reactionButton" onClick={() => {
                dispatch(addreaction({id: post.id, name: name}))
            }}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{renderReactions}</div>
    )
}

export default memo(ReactionButtons);