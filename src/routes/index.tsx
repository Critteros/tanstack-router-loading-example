import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const [clicked, setClicked] = useState(false);
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
			<h1 className="text-2xl font-bold">Main page</h1>
			<Button asChild onClick={() => setClicked(true)}>
				<Link to="/dashboard">Dashboard</Link>
			</Button>
			{clicked && (
				<span className="text-destructive font-semibold">
					Button was clicked
				</span>
			)}
		</div>
	);
}
