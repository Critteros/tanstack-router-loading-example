import { createFileRoute } from "@tanstack/react-router";

import { Skeleton } from "../components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";

function generateData(rows = 1000) {
	return Array.from({ length: rows }, (_, i) => ({
		id: i + 1,
		name: `Name ${i + 1}`,
		email: `user${i + 1}@example.com`,
		value: Math.floor(Math.random() * 10000),
	}));
}

type DataRow = {
	id: number;
	name: string;
	email: string;
	value: number;
};

export const Route = createFileRoute("/dashboard")({
	loader: async () => {
		await new Promise((r) => setTimeout(r, 2400));
		return { data: generateData(1000) };
	},
	pendingComponent: () => {
		return (
			<div className="p-4">
				<h2 className="text-xl font-bold mb-4">Dashboard - Large data table</h2>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Value</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map((_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<TableRow key={i}>
								<TableCell>
									<Skeleton className="h-4 w-8" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-48" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-16" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	},
	component: DashboardPage,
});

function DashboardPage() {
	const { data } = Route.useLoaderData() as { data: DataRow[] };
	return (
		<div className="p-4">
			<h2 className="text-xl font-bold mb-4">Dashboard - Large data table</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Value</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell>{row.value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
