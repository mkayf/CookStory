import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'
import config from '../config'

function RTE({name, label, control, defaultValue = ""}) {
  return (
    <div className='w-full'>
        {
            label && <label className='text-md lg:text-lg text-[#4B4B4B] block mb-2 poppins-regular'>{label}</label>
        }

        <Controller 
        name={name || 'content'}
        control={control}
        rules={{
          required : 'Please write content before publishing'
        }}
        render={({field : {onChange}}) => (
            <Editor
            apiKey={config.tinyMCEAPIKey}
            initialValue={defaultValue}
            init={{
                height : 500,
                menubar : true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                  ],
                  toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                  content_style : 'body {font-family: Helvetica, Arial, sans-serif; font-size: 14px;}'
            }}
            onEditorChange={onChange}
             />
        )}
        />
    </div>
  )
}

export default RTE