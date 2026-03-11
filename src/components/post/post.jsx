import "./styles.css";

export function Post() {
    return (
        <>
            <section>
                <header>
                    <div className="headerTitle">
                        <h2>CodeLeap Network</h2>
                    </div>
                </header>
            </section>

            <section>
                <main>
                    <div className="postSection">
                        <div className="postContent">
                            <div className="title">
                                <h3>What's on your mind?</h3>
                            </div>
                            <span>Title</span>
                            <div className="titleContent">
                                <input className="postTitle" type="text" placeholder='Hello world' />
                            </div>
                            <span>Content</span>
                            <div className="content">
                                <textarea className="textContent" name="" id="" placeholder='Content here' ></textarea>
                            </div>
                            <div className="button">
                                <button type='submit'>Create</button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Post;