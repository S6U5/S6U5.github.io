import { Calendar, Home, Inbox, Search, Settings, Annoyed, IdCard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Business Card",
    url: "/business-card",
    icon: IdCard,
  },
  {
    title: "Inbox(ハリボテ)",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar(ハリボテ)",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search(ハリボテ)",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings(ハリボテ)",
    url: "#",
    icon: Settings,
  },
  {
    title: "雰囲気だけなのでほとんど飛べません。",
    url: "#",
    icon: Annoyed
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}