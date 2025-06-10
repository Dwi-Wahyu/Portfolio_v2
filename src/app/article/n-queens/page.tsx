// app/n-queens/page.tsx

import React from "react";
import Link from "next/link";

export default function NQueensPage() {
  return (
    <div className="min-h-screen bg-darkBlue text-textLight p-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-accentBlue hover:text-textLight transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-accentBlue mb-4">
          The N-Queens Problem
        </h1>
        <p className="text-xl text-lightBlue">
          A classic backtracking puzzle: Placing N queens on an N×N chessboard
          without them attacking each other
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* What is the N-Queens Problem? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            What is the N-Queens Problem?
          </h2>
          <p className="mb-4 leading-relaxed">
            The{" "}
            <span className="font-semibold text-accentBlue">
              N-Queens problem
            </span>{" "}
            is a classic computer science puzzle that asks: "Given an N×N
            chessboard, how can you place N queens on the board so that no two
            queens threaten each other?" This means no two queens can share the
            same row, column, or diagonal.
          </p>
          <p className="leading-relaxed">
            The problem was first proposed in 1848 by chess composer Max Bezzel
            and has since become:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>A benchmark for backtracking algorithms</li>
            <li>A common interview question for technical roles</li>
            <li>A teaching tool for recursion and constraint satisfaction</li>
            <li>A research topic in mathematics and computer science</li>
          </ul>
        </section>

        {/* Problem Constraints */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Problem Constraints
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Chess Queen Movement:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Can move any number of squares vertically</li>
                <li>Can move any number of squares horizontally</li>
                <li>Can move any number of squares diagonally</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Solution Requirements:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Exactly N queens on an N×N board</li>
                <li>No two queens share the same row</li>
                <li>No two queens share the same column</li>
                <li>No two queens share the same diagonal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example: 4-Queens Problem */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Example: 4-Queens Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 leading-relaxed">
                For N=4, there are 2 fundamental solutions (with rotations and
                reflections counting as the same):
              </p>
              <div className="grid grid-cols-4 gap-1 w-48 mx-auto mb-6">
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-1 w-48 mx-auto mb-6">
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>

                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
              </div>
            </div>
          </div>
          <p className="leading-relaxed">
            The 8-Queens problem (standard chessboard) has 92 solutions, with 12
            fundamental solutions when considering rotations and reflections as
            identical.
          </p>
        </section>

        {/* Backtracking Approach */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Backtracking Approach
          </h2>
          <p className="mb-4 leading-relaxed">
            The standard solution uses a{" "}
            <span className="font-semibold text-accentBlue">
              backtracking algorithm
            </span>{" "}
            that:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              Places queens one by one in different columns
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Start from the leftmost column</li>
                <li>Try all rows in the current column</li>
              </ul>
            </li>
            <li>
              For each placement, checks if the queen is safe
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>No queen in the same row to the left</li>
                <li>No queen in the upper diagonal to the left</li>
                <li>No queen in the lower diagonal to the left</li>
              </ul>
            </li>
            <li>If safe, recursively place queens in next columns</li>
            <li>
              If no safe position found, backtrack to previous column
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Remove the queen from current position</li>
                <li>Try next row in previous column</li>
              </ul>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-darkBlue rounded-md">
            <h3 className="text-xl font-semibold text-accentBlue mb-2">
              Key Insight:
            </h3>
            <p>
              We only need to check conflicts with queens to the left of current
              position because:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>We're placing queens column by column</li>
              <li>Right columns are still empty</li>
              <li>This reduces the number of checks needed</li>
            </ul>
          </div>
        </section>

        {/* Python Implementation */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Python Implementation
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`def solve_n_queens(n):
    def is_safe(board, row, col):
        # Check this row on left side
        for i in range(col):
            if board[row][i] == 1:
                return False
        
        # Check upper diagonal on left side
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        
        # Check lower diagonal on left side
        for i, j in zip(range(row, n, 1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        
        return True

    def solve_util(board, col):
        # Base case: If all queens are placed
        if col >= n:
            solutions.append([row[:] for row in board])
            return True
        
        # Consider this column and try placing queen in all rows
        res = False
        for i in range(n):
            if is_safe(board, i, col):
                board[i][col] = 1
                
                # Recur to place rest of the queens
                res = solve_util(board, col + 1) or res
                
                # Backtrack: remove queen if no solution found
                board[i][col] = 0
        
        return res

    solutions = []
    board = [[0 for _ in range(n)] for _ in range(n)]
    solve_util(board, 0)
    return solutions

# Example usage
n = 4
solutions = solve_n_queens(n)
print(f"Number of solutions for {n}-Queens:", len(solutions))
for sol in solutions:
    for row in sol:
        print(' '.join('Q' if cell else '.' for cell in row))
    print()`}
          </pre>
        </section>

        {/* JavaScript Implementation */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            JavaScript Implementation
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`function solveNQueens(n) {
    const solutions = [];
    
    function isSafe(board, row, col) {
        // Check left side of current row
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 1) return false;
        }
        
        // Check upper diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) return false;
        }
        
        // Check lower diagonal
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 1) return false;
        }
        
        return true;
    }
    
    function solveUtil(board, col) {
        // All queens placed
        if (col === n) {
            // Add solution (copy the board)
            solutions.push(board.map(row => [...row]));
            return;
        }
        
        // Try all rows in current column
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;  // Place queen
                solveUtil(board, col + 1);
                board[i][col] = 0;  // Backtrack
            }
        }
    }
    
    // Initialize empty board
    const board = Array(n).fill().map(() => Array(n).fill(0));
    solveUtil(board, 0);
    
    return solutions;
}

// Example usage
const n = 4;
const solutions = solveNQueens(n);
console.log('Number of solutions for n-Queens:', solutions.length);
solutions.forEach((sol, idx) => {
    console.log("Solution idx + 1:");
    console.log(sol.map(row => row.map(cell => cell ? 'Q' : '.').join(' ')).join('\\n'));
    console.log();
});`}
          </pre>
        </section>

        {/* Optimizations */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Optimizations and Variations
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Optimizations:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Bitmasking:</span>
              Represent board state with bits for faster conflict checking
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Symmetry breaking:
              </span>
              Exploit board symmetries to reduce computation
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Iterative approach:
              </span>
              Avoid recursion stack limits for large N
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Variations:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">N-Rooks:</span>
              Queens can only move like rooks (no diagonal constraint)
            </li>
            <li>
              <span className="font-medium text-accentBlue">Superqueens:</span>
              Queens that can also move like knights
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Toroidal boards:
              </span>
              Boards that wrap around edges
            </li>
            <li>
              <span className="font-medium text-accentBlue">3D N-Queens:</span>
              Extension to three-dimensional boards
            </li>
          </ul>
        </section>

        {/* Complexity Analysis */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Complexity Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Time Complexity:
              </h3>
              <p className="mb-2">
                The naive backtracking approach has a time complexity of{" "}
                <strong>O(N!)</strong> in the worst case.
              </p>
              <p>This is because:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>First column has N choices</li>
                <li>Second column has at most N-1 choices</li>
                <li>Third column has at most N-2 choices</li>
                <li>And so on...</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Space Complexity:
              </h3>
              <p className="mb-2">
                The space complexity is <strong>O(N²)</strong> for storing the
                board.
              </p>
              <p>With optimizations:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Bitmasking can reduce to O(N)</li>
                <li>Recursion stack adds O(N) space</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Real-World Applications
          </h2>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Parallel computing:
              </span>
              Task scheduling where tasks can't conflict
            </li>
            <li>
              <span className="font-medium text-accentBlue">VLSI testing:</span>
              Chip design and testing applications
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Air traffic control:
              </span>
              Scheduling planes on runways without conflicts
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Constraint satisfaction:
              </span>
              Benchmark for CSP solvers
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Algorithm education:
              </span>
              Teaching backtracking and recursion
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Conclusion
          </h2>
          <p className="leading-relaxed">
            The N-Queens problem is a classic example of a constraint
            satisfaction problem that beautifully demonstrates the power of
            backtracking algorithms. While the naive solution has exponential
            complexity, it serves as an important foundation for understanding
            more advanced techniques in algorithm design. The problem's
            simplicity in formulation yet complexity in solution makes it an
            enduring favorite in computer science education and research.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-textLight text-sm">
        <p>Created with ❤️ in Next.js 14</p>
      </footer>
    </div>
  );
}
