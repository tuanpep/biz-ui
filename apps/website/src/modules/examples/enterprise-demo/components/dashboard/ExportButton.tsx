"use client";

import { useState } from "react";
import { Download, FileSpreadsheet, FileText, Loader2 } from "lucide-react";
import { Button } from "biz-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "biz-ui";
import { useAppToast } from "@examples/hooks";

interface ExportButtonProps {
  data: unknown[];
  filename?: string;
  onExportCSV?: () => void;
  onExportPDF?: () => void;
}

export function ExportButton({
  data,
  filename = "export",
  onExportCSV,
  onExportPDF,
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<"csv" | "pdf" | null>(null);
  const { success, error } = useAppToast();

  const handleExportCSV = async () => {
    setIsExporting(true);
    setExportType("csv");
    try {
      // Simulate export delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onExportCSV?.();
      success(
        "Export Complete",
        `Your data has been exported to ${filename}.csv`,
      );
    } catch (err) {
      error("Export Failed", "There was an error exporting your data");
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    setExportType("pdf");
    try {
      // Simulate export delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onExportPDF?.();
      success(
        "Export Complete",
        `Your report has been exported to ${filename}.pdf`,
      );
    } catch (err) {
      error("Export Failed", "There was an error exporting your report");
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" disabled={isExporting}>
          {isExporting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting {exportType?.toUpperCase()}...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Export
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleExportCSV} disabled={isExporting}>
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportPDF} disabled={isExporting}>
          <FileText className="mr-2 h-4 w-4" />
          Export as PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
