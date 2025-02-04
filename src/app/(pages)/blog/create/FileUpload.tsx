"use client"

import React, {useState} from "react"
import {FileIcon, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

export function FileUpload({files, setFiles}: { files: File[], setFiles: any }) {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files)
            setFiles((prev: any) => [...prev, ...newFiles])
        }
    }

    const removeFile = (name: string) => {
        setFiles((prev: any) => prev.filter((file: File) => file.name !== name))
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="space-y-4">
                <div className="relative">
                    <Input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload"/>
                    <Label
                        htmlFor="file-upload"
                        className="flex items-center gap-2 cursor-pointer p-4 border-2 border-dashed rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FileIcon className="h-6 w-6"/>
                        <span>Добавить документ</span>
                    </Label>
                </div>

                {files.length > 0 && (
                    <div className="space-y-2">
                        {files.map((file) => (
                            <div
                                key={file.name}
                                className="relative flex items-center border rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <FileIcon className="h-5 w-5 text-gray-500"/>
                                    <span className="text-sm text-gray-600">{file.name}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => removeFile(file.name)}
                                >
                                    <X className="h-4 w-4"/>
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

