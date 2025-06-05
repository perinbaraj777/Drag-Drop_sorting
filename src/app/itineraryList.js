"use client";
import { useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  closestCenter,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { itinerary as initialItems } from "./utils/mockData";
import ItineraryCard from "./itineraryCards";

function SortableItem({ id, title, rating, review, description, image }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-4"
    >
      <ItineraryCard
        day={id}
        title={title}
        rating={rating}
        review={review}
        description={description}
        image={image}
      />
    </div>
  );
}

export default function ItineraryList() {
  const [items, setItems] = useState(initialItems);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <SortableItem
            key={item.id}
            id={item.id}
            title={item.title}
            rating={item.rating}
            review={item.review}
            description={item.description}
            image={item.image}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
