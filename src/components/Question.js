const Question = (props) => {
    return (
        <li className="question-list-item">
            <div className="question-answer">
                <h4 className="question-title">
                    <span className="question">Q:&nbsp;</span>
                    <span className="sr-only"></span>
                    {/* need to look at this */}
                    {/* also need to make it so info is added dynamically from database */}
                    <a className="question">{props.question}</a>
                </h4>
                <p className="author">
                    <span className="asked-ago">Asked
                        <time className="submission-date" title="Jan 18, 2021 12:50 PM"> 1 year ago</time> by {props.author}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default Question;