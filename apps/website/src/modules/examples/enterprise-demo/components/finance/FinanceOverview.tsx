"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "biz-ui";
import { InvoiceTable } from "./InvoiceTable";
import { ExpenseTable } from "./ExpenseTable";

export function FinanceOverview() {
  return (
    <Tabs defaultValue="invoices" className="space-y-6">
      <TabsList>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="invoices">
        <InvoiceTable />
      </TabsContent>
      <TabsContent value="expenses">
        <ExpenseTable />
      </TabsContent>
    </Tabs>
  );
}
