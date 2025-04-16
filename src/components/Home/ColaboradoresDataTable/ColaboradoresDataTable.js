import { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import {  DataTable } from 'react-native-paper';
import { styles } from "./ColaboradoresDataTable.styles";

export function ColaboradoresDataTable(props) {

    const { colaboradores } = props;

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([6, 7, 8]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, colaboradores.length);

    let nro=1;

  return (
    
    <DataTable>
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
            <DataTable.Header>
                <DataTable.Title style={{ width: 30 }}>N°</DataTable.Title>
                <DataTable.Title style={{ width: 100 }}>Rut</DataTable.Title>
                <DataTable.Title style={{ width: 200 }}>Apellidos</DataTable.Title>
                <DataTable.Title style={{ width: 200 }}>Nombres</DataTable.Title>
            </DataTable.Header>
            
            {colaboradores.slice(from, to).map((item) => (
                <DataTable.Row style={{ flex: 1, width: '100%', height: 50 }} key={item.id}>
                <DataTable.Cell style={{ width: 30 }}>{`${nro++}`}</DataTable.Cell>    
                <DataTable.Cell style={{ width: 100 }}>{item.rut}</DataTable.Cell>
                <DataTable.Cell style={{ width: 200 }}>{item.nombres}</DataTable.Cell>
                <DataTable.Cell style={{ width: 200 }}>{item.apellidos}</DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(colaboradores.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${colaboradores.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
            />
            </ScrollView>
    </DataTable>
    
  )
}