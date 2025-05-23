import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function InputQuantity({ value, onChange }) {
    // Phuong thuc dung de cap nhat quantity (Tang / Giam)
    function handleIncrement() {
        onChange((prev) => prev + 1);
    }
    function handleDecrement() {
        if (value > 1) {
            onChange((prev) => prev - 1);
        }
    }
    return (
        <div className="flex items-center gap-6 border border-gray-500 py-2 w-[7rem] justify-center mt-5">
            <FaMinus className="cursor-pointer" onClick={handleDecrement} />
            <span>{value}</span>
            <FaPlus className="cursor-pointer" onClick={handleIncrement} />
        </div>
    );
}
