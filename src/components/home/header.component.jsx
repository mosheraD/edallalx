export default function Header() {
    return (
        <>
            <header id="header" className="bg-header row m-0 align-items-center  ">
                <article style={{ paddingBottom: '5rem' }} className="col-md-6 ml-5 text-white custom-header p-relative d-web" >
                    <h1 style={{ fontSize: '3.8rem' }}>Purchase</h1>
                    <h1 className="" style={{ fontSize: '3.8rem' }}>Fruits & Vegetables</h1>
                    <h1
                        style={{ fontSize: '3.8rem', padding: '0.5rem 5.4rem 0.5rem 5.4rem', right: '15.5rem' }}
                        className="bg-blue p-absolute  d-inline-block "
                    >Directly</h1>
                </article>
                <article style={{ paddingBottom: '5rem' }} className="col-lg-6 text-white d-mob" >
                    <h1 style={{ fontSize: '3.8rem' }}>Purchase</h1>
                    <h1 className="" style={{ fontSize: '3.8rem' }}>Fruits & Vegetables</h1>
                    <h1 className="bg-blue d-inline-block pr-3 pl-3"
                    >Directly</h1>
                </article>
            </header>
        </>

    )
}