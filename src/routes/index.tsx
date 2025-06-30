import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
			<h1 className="text-2xl font-bold">Main page</h1>
			<Button asChild>
				<Link to="/dashboard">Dashboard</Link>
			</Button>
		</div>
	);
}
