<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import SidebarFooter from '$lib/components/ui/sidebar/sidebar-footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';
	import LogoLight from '$lib/assets/images/light.svg';
	import LogoDark from '$lib/assets/images/dark.svg';
	import {
		BookOpenText,
		Briefcase,
		ChartNoAxesCombined,
		ClipboardList,
		Github,
		Handshake,
		House
	} from 'lucide-svelte';

	// Menu items.
	const items = [
		{
			title: 'Homepage',
			url: '/',
			icon: House
		},
		{
			title: 'Create Student',
			url: '/create/student',
			icon: BookOpenText
		},
		{
			title: 'Create Employee',
			url: '/create/employee',
			icon: Briefcase
		},
		{
			title: 'Create Guest',
			url: '/create/guest',
			icon: Handshake
		},
		{
			title: 'Statistics',
			url: '/statistics',
			icon: ChartNoAxesCombined
		},
		{
			title: 'Instructions',
			url: '/instructions',
			icon: ClipboardList
		}
	];

	const sidebar = useSidebar();
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="select-none font-bold">
				<img class="mr-2 mt-1 hidden size-7 dark:block" src={LogoLight} alt="Logo Light" />
				<img class="mr-2 mt-1 block size-7 dark:hidden" src={LogoDark} alt="Logo Dark" />
				Indexomator
			</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								onclick={() => {
									sidebar.setOpenMobile(false);
								}}
							>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon /> <span class="select-none">{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<SidebarFooter>
		<Button variant="link" href="https://github.com/studentinovisad/indexomator">
			<Github /> <span>Contribute</span>
		</Button>
	</SidebarFooter>
</Sidebar.Root>
