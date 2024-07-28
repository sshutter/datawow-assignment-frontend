"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { getMySinglePost, updatePost } from "@/services/posts/posts.service";
import { IUpdatePost } from "@/interfaces/posts.interface";

const EditPostForm = ({ postId }: { postId: string }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await getMySinglePost(postId);

        const data = res.post;
        console.log("Data", data);
        setTitle(data.title);
        setBody(data.body);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostData();
  }, [postId]);

  // Handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Perform the update operation here
    // For example, you might send a request to your server with the form data
    const postFormData: IUpdatePost = {
      post: {
        title: title,
        body: body,
      },
    };

    await updatePost(postFormData, postId);
    router.push(`/my_posts/${postId}`);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, marginTop: 4 }}
        className="rounded-xl"
      >
        <Typography variant="h4" gutterBottom>
          Edit post {postId}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            variant="outlined"
            value={title}
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Body"
            variant="outlined"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="outlined"
              className="border-black text-black hover:bg-slate-200"
              color="inherit"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              className="bg-black text-white hover:bg-slate-700"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditPostForm;
