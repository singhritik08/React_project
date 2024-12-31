import {  EditButton, ImageField, List, NumberField, ReferenceField, TextField, TopToolbar, useRecordContext , SelectColumnsButton , ExportButton, DatagridConfigurable} from 'react-admin';
import { PosterFilterSidebar } from './filterList';

const PosterListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
)

const UrlField = ({source} : {source: string}) => {
    const record = useRecordContext();
    if (!record) return null;
    return(
        <a href={record[source]} target="_blank">View</a>
    )
}

export const PosterList = () => (
    <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
        <DatagridConfigurable>
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories" />
            <TextField source="title" />
            <NumberField source="width" label="width(cm)"/>
            <NumberField source="height" label="width(cm)"/>
            <NumberField source="price" />
            <ImageField source="thumbnail" title='title' sx={{
                "& img":{maxWidth:80 , maxHeight:80 , objectFit:"contain"}
            }}/>
            <UrlField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" sx={{fontWeight:"bold"}} emptyText='N/A'/>
        <EditButton />
        </DatagridConfigurable>
    </List>
);