export function Welcome( {appName, year, children} ) {
    return <>
        <h1>{appName}</h1>
        <p>Try to remove children below and see what happens</p>
        {children}
    </>
}