import Union from "/assets/images/Union.svg";
import btnArrow from "/assets/images/btn-arrow.svg"
import { toast } from 'react-toastify';

const CommentForm = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    return (
        <>
            <div className="comment-form-wrap">
                <h3 className="title-with-circle section-subtitle">
                    <img src={Union} alt="icon" />
                    LEAVE A COMMENT
                </h3>
                <form className="comment-form" onSubmit={handleForm}>
                    <div className="input-group">
                        <textarea name="comment" id="comment" placeholder="Your Comment" autoComplete='off' required />
                    </div>
                    <div className="form-col-2">
                        <div className="input-group">
                            <input type="text" placeholder="Name" name='name' autoComplete='off' required />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Email" name='email' autoComplete='off' required />
                        </div>
                    </div>
                    <div className="input-group">
                        <button className="theme-btn">
                            Post a comment
                            <img src={btnArrow} alt="icon" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CommentForm;