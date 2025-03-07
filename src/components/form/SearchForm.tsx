const SearchForm = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
    }

    return (
        <>
            <div className="sidebar-widget sidebar-widget-search">
                <form onSubmit={handleForm}>
                    <input type="text" name="search" placeholder="Search Here..." autoComplete="off" required />
                    <button><i className="las la-search" /></button>
                </form>
            </div>
        </>
    );
};

export default SearchForm;