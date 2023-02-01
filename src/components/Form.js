
function Form() {

    return (
        <div className="login-form">
            <form className="form-grid">
                <label htmlFor="name"> Name: 
                    <input type="text" name="name" className="form-control" />
                </label>
                <label htmlFor="email"> Email:
                    <input type="email" name="email" className="form-control" />
                </label>
                <label htmlFor="linkedin"> LinkedIn:
                    <input type="text" name="linkedin" className="form-control" />
                </label>
                <label htmlFor="linkedin"> Contact #:
                    <input type="text" name="linkedin" className="form-control" />
                </label>
                <label htmlFor="password" className="message"> Message:
                    <textarea className="form-control" rows="7"></textarea>
                </label>
                <button className="btn submit-btn">Submit</button>
            </form>
        </div>
    )

}

export default Form;