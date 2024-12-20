import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

function App() {

	const appRouter = createBrowserRouter([{
		path: "/",
		element: <Body/>,
		children: [
			{
				path: "/",
				element : <MainContainer/>
			},
			{
				path: "watch",
				element : <WatchPage/>
			},

		],


	}])
	return (
		<Provider store={store}>
			<div>
				<Header />
				<RouterProvider router ={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
