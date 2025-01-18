"use client";

import { useState, useCallback } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

const SeriesForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [description, setDescription] = useState("");

  const handleImageUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleImageUpload(file);
      }
    },
    [handleImageUpload]
  );

  const inputClassName =
    "mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-transparent px-3 py-2 text-white transition duration-200 ease-in-out hover:border-gray-400";

  return (
    <form className="max-w-4xl mx-auto p-6 space-y-6 bg-black/55 rounded-md">
      <div className="space-y-2">
        <label htmlFor="image" className="block text-md font-medium text-white">
          Cover Image
        </label>
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          } transition-all duration-300 ease-in-out`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files?.[0] && handleImageUpload(e.target.files[0])
            }
            className="hidden"
          />
          {imagePreview ? (
            <div className="relative inline-block">
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Preview"
                className="w-full mx-auto rounded-lg shadow-md"
              />
              <button
                onClick={() => setImagePreview(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                type="button"
              >
                <FaTimes size={16} />
              </button>
            </div>
          ) : (
            <label htmlFor="image" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <FaUpload size={48} className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  Drag & drop an image here, or click to select
                </p>
              </div>
            </label>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter manga title"
          className={inputClassName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="chineseTitle"
            className="block text-sm font-medium text-white"
          >
            Chinese Title
          </label>
          <input
            id="chineseTitle"
            type="text"
            placeholder="Enter Chinese title"
            className={inputClassName}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="artistName"
            className="block text-sm font-medium text-gray-400"
          >
            Artist Name
          </label>
          <input
            id="artistName"
            type="text"
            placeholder="Enter artist name"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-400"
          >
            Status
          </label>
          <select
            id="status"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-transparent px-3 py-2 text-white transition duration-200 ease-in-out hover:border-gray-400"
          >
            <option className="text-black" value="">
              Select status
            </option>
            <option className="text-black" value="ongoing">
              Ongoing
            </option>
            <option className="text-black" value="stopped">
              Stopped
            </option>
            <option className="text-black" value="upcoming">
              Upcoming
            </option>
          </select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="genres"
            className="block text-sm font-medium text-gray-400"
          >
            Genres
          </label>
          <input
            id="genres"
            type="text"
            placeholder="Enter genres (comma-separated)"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-400"
        >
          Description (Max 1000 characters)
        </label>
        <textarea
          id="description"
          placeholder="Enter manga description"
          rows={4}
          maxLength={1000}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClassName}
        ></textarea>
        <p className="text-sm text-gray-500 text-right">
          {description.length}/1000 characters
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SeriesForm;
