// Default page layout, used as around all pages

function PageLayout({ heading, children }) {
    return (
        <div className="page">
            <h1 className="heading">{heading}</h1>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default PageLayout;