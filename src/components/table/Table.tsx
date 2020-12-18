import React from 'react';
import './Table.css';

interface IControlTableProps {
    columns: Column[],
    rows?: any
}

interface Column {
    label: string;
    id: string;
}

class Table extends React.Component<IControlTableProps> {
    renderTableHeader() {
        return this.props.columns.map((column: Column, index: number) => {
            return <th className="tableHead" key={index}>{column.label}</th>
        });
    }

    renderTableData() {
        return this.props.rows.map((row: any, index: number) => {
            return (
                <tr key={index}>
                    {this.props.columns.map((col: Column, index: number) => {
                        return <td key={index}>{row[col.id]}</td>
                    })}
                </tr>
            )
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        )
    }
}

export default Table;