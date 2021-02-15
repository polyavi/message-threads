import React, { useState } from 'react';
import Message from '../Message';
import './styles.scss';

const Thread = ({ messages }) => {
    const messageCount = messages.length;
    const hasHighRating = messages.find((message) => message.score >= 6);
    
    const [isCollapsed, setIsCollapsed] = useState(messageCount > 1);

    const handleClick = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
        }
    }

    const getPosition = (index) => {
        // NOTE: no styles need when the thread is expanded
        if (!isCollapsed) return null;
        
        // NOTE: Limit message stacking to 6 message, for better UI when there are a lot of messages in a thread
        if (index > 5) return { display: 'none' };

        return {
            top: `${index*8}px`,
            left: `${index*8}px`,
            zIndex: messageCount - index,
            height: '120px'
        }
    }

    return (
    <div className="thread" onClick={handleClick}>
        {
            isCollapsed &&
                <div
                    className={`thread__count ${hasHighRating ? 'thread--rating-high' : 'thread--rating-low' }`}
                    style={{
                        //make sure message count is always on top
                        zIndex: messageCount + 1
                    }}
                >
                    {`${messageCount} messages`}
                </div>
        }
        <div className={`thread__messages ${isCollapsed ? 'thread--collapsed': ''}`}>
            {
                messages.map((message, index) => {
                    return <Message
                    message={message}
                    key={message.id}
                    postion={getPosition(index)} />
                })
            }
        </div>
    </div>
    )
}

export default Thread;