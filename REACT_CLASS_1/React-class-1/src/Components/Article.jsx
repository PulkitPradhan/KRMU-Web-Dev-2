import React, { useState } from 'react';
import { add, sub } from './utility';
import '../App.css';

function Article() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");

    const handleIncrement = () => {
        setCount(add(count, 1));
    };

    const handleDecrement = () => {
        setCount(sub(count, 1));
    };

    return (
        <div className="article-container">
            <div className="article-header">
                <h2>Health Analysis Article</h2>
                <p>Advanced diagnostic insights powered by MediChain AI.</p>
            </div>
            
            <div className="counter-section box-glass">
                <h3>Live Metrics Counter</h3>
                <div className="counter-display">
                    <span className="counter-value">{count}</span>
                </div>
                <div className="counter-controls">
                    <button className="btn-premium" onClick={handleDecrement}>
                        Decrement
                    </button>
                    <button className="btn-premium" onClick={handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>

            <div className="article-content">
                <h2>Clinical Overview</h2>
                <p>
                    MediChain AI utilizes decentralized consensus to verify medical data integrity. 
                    This ensuring that patient records are immutable and accessible only by authorized 
                    personnel through encrypted smart contracts.
                </p>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h4>Patient ID</h4>
                        <p>#MC-A102</p>
                    </div>
                    <div className="stat-card">
                        <h4>Security Grade</h4>
                        <p>A++</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;

