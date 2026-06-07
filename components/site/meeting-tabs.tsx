"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MeetingTabs({
  calendarLabel,
  detailsLabel,
  calendar,
  details,
}: {
  calendarLabel: string
  detailsLabel: string
  calendar: React.ReactNode
  details: React.ReactNode
}) {
  return (
    <Tabs defaultValue="calendar" className="w-full gap-5">
      <TabsList>
        <TabsTrigger value="calendar">{calendarLabel}</TabsTrigger>
        <TabsTrigger value="details">{detailsLabel}</TabsTrigger>
      </TabsList>
      <TabsContent value="calendar">{calendar}</TabsContent>
      <TabsContent value="details" className="flex flex-col gap-4">
        {details}
      </TabsContent>
    </Tabs>
  )
}
