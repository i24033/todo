import "./notFound.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="page-not-found">
        <h2>Page not found</h2>
        <Link to="/">Go to Home</Link>
    </div>
  )
}
