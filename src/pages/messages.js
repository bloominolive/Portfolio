import React, { useEffect, useState, useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - 30)); // Default to 30 days ago
  });
  const [endDate, setEndDate] = useState(new Date());
  const [showCompleted, setShowCompleted] = useState(false);
  const [nameFilter, setNameFilter] = useState(''); // Added for name filter

  // Fetch messages from backend
  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('supabase_token');
      const response = await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          startDate,
          endDate,
          showCompleted,
          nameFilter, // Send the name filter to the backend
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [startDate, endDate, showCompleted]);

  // Delete selected messages
  const deleteMessages = async () => {
    const idsToDelete = selectedRows.map((row) => row.id);
    try {
      const token = localStorage.getItem('supabase_token');
      const response = await fetch('http://localhost:3001/messages/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ids: idsToDelete }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      // Remove deleted messages from the table
      setMessages((prev) => prev.filter((msg) => !idsToDelete.includes(msg.id)));
      setSelectedRows([]); // Clear selected rows
    } catch (error) {
      console.error('Error deleting messages:', error.message);
    }
  };

  // Mark selected messages as completed
  const markAsCompleted = async () => {
    const idsToComplete = selectedRows.map((row) => row.id);
    try {
      const token = localStorage.getItem('supabase_token');
      const response = await fetch('http://localhost:3001/messages/mark-complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ids: idsToComplete }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      // Update the messages list to reflect the completed status
      setMessages((prev) => {
        const updatedMessages = prev.map((msg) =>
          idsToComplete.includes(msg.id) ? { ...msg, is_completed: true } : msg
        );
        return showCompleted
          ? updatedMessages
          : updatedMessages.filter((msg) => !msg.is_completed); // Remove completed messages if "Show Completed" is off
      });
      setSelectedRows([]); // Clear selected rows
    } catch (error) {
      console.error('Error marking messages as completed:', error.message);
    }
  };

  // Define table columns
  const columns = useMemo(
    () => [
      {
        id: 'selection',
        Header: '', // No header for checkboxes
        Cell: ({ row }) => (
          <input
            type="checkbox"
            {...row.getToggleRowSelectedProps()}
          />
        ),
      },
      {
        Header: 'Date',
        accessor: 'created_at',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Topic',
        accessor: 'topic',
      },
      {
        Header: 'Message',
        accessor: 'message',
      },
      {
        Header: 'Status',
        accessor: 'is_completed',
        Cell: ({ value }) => (
          value ? <span className="badge bg-success">Completed</span> : <span className="badge bg-secondary">Pending</span>
        ),
      },
    ],
    []
  );

  // Table data
  const data = useMemo(() => messages, [messages]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    { columns, data },
    useRowSelect
  );

  // Update selected rows
  useEffect(() => {
    setSelectedRows(selectedFlatRows.map((row) => row.original));
  }, [selectedFlatRows]);

  const handleNameFilterSubmit = (e) => {
    e.preventDefault();
    fetchMessages();
  };

  return (
    <div>
      <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: '5px' }} />
      <h1 className="text-center">Messages</h1>
      <hr className="text-dark w-25 mx-auto rounded mb-5" style={{ borderWidth: '5px' }} />

      {/* Date Range Picker with Labels */}
      <div className="d-flex justify-content-center mb-4 font-parkinsons">
        <div className="me-2">
          <label htmlFor="start-date" className="form-label">Start Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="form-control border-dark ms-2"
          />
        </div>
        <div>
          <label htmlFor="end-date" className="form-label ms-2">End Date</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            className="form-control border-dark ms-2"
          />
        </div>
      </div>

      {/* Name Filter */}
      <form className="text-center mb-3 font-parkinsons" onSubmit={handleNameFilterSubmit}>
        <label htmlFor="name-filter" className="form-label me-2">Name Filter:</label>
        <input
          id="name-filter"
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="form-control d-inline w-25 me-3 border-dark"
          placeholder="Enter first or last name"
        />
        <button type="submit" className="btn btn-myrtle-green ms-2">Filter</button>
      </form>

      {/* Toggle Show Completed */}
      <div className="text-center mb-3">
        <button
          className={`btn ${showCompleted ? 'btn-danger' : 'btn-myrtle-green'}`}
          onClick={() => setShowCompleted((prev) => !prev)}
        >
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      </div>

      {/* Table */}
      <table {...getTableProps()} className="table table-striped font-parkinsons border border-dark shadow w-75 mx-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='text-center'>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='border-end border-dark'>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='text-center'>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                style={{
                  backgroundColor: row.original.is_completed ? '#d4edda' : 'transparent', // Highlight completed rows
                }}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className='border-end border-dark'>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Action Buttons */}
      {selectedRows.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-danger me-2" onClick={deleteMessages}>
            Delete Selected
          </button>
          <button className="btn btn-myrtle-green" onClick={markAsCompleted}>
            Mark as Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
