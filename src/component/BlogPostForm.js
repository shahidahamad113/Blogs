import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initalValues}) =>{
    const [title, setTitle]=useState(initalValues.title);
    const [content, setContent]=useState(initalValues.content);
    return <View>
        <Text style={styles.label}>Enter Title :</Text>
        <TextInput 
            style={styles.input} 
            value={title} 
            onChangeText={(text)=> setTitle(text)} 
        />
        <Text style={styles.label}>Enter Content :</Text>
        <TextInput 
            style={styles.input} 
            value={content} 
            onChangeText={(content)=>setContent(content)}
        />
        <Button 
            title="Save Blog Post"
            onPress={()=> onSubmit(title, content)}
        />
    </View>
};

BlogPostForm.defaultProps = {
    initalValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;