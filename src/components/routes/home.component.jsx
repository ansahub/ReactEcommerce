import Directory from "../directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Basics',
            imageUrl: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 2,
            title: 'Music',
            imageUrl: 'https://images.unsplash.com/photo-1634609012927-875e4983d884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 3,
            title: 'Sport',
            imageUrl: 'https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 4,
            title: 'Merch',
            imageUrl: 'https://images.unsplash.com/photo-1571461542309-dedaaec54069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 5,
            title: 'Patterns',
            imageUrl: 'https://images.unsplash.com/photo-1611040027926-4d9dd4b89c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
    ];


    return (
        <div>
            <Outlet/>
            <Directory categories={categories} />
        </div>
    );
};

export default Home;