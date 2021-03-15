import AppFunction from './AppFunction';

const ItemListContainer = (props) => (
    <>
        <main className="container-fluid vh-100">
            <h2 className="text-center align-self-center">{props.title}</h2>
            <AppFunction/>
        </main>
    </>
);

export default ItemListContainer;