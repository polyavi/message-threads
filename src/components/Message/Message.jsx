import React from 'react';
import * as moment from 'moment';
import './styles.scss';

const Message = ({ message, postion }) => {
    const { text, question, subject, created_at, team, score } = message;

    const isHighRating = score >= 6;

    return <div
        className="message" 
        style={postion}
    >
        <div className="message__content">
            <div
                className={`message__subject ${isHighRating ? 'message--rating-high' : 'message--rating-low'}`}
            >
                {subject}
            </div>
            <div className="message__question">{question}</div>
            <div className="message__text">{text}</div>
        </div>
        <div className="message__meta">
            <div className="message__team">{team}</div>
            <div className="message__created">{moment(created_at).format("MMM Do")}</div>
        </div>
        </div>
}

export default Message;