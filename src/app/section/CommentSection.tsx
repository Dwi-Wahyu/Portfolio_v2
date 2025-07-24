"use client";

import { FormEvent, useEffect, useState } from "react";

import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";

import { IoReturnDownForwardOutline } from "react-icons/io5";

import { FaChevronRight } from "react-icons/fa";

type Komentar = {
  id: string;
  name: string;
  content: string;
  like: number;
  dislike: number;
  subcomment: SubKomentar[];
};

type SubKomentar = {
  id: string;
  name: string;
  content: string;
  replyTo: string;
  like: number;
  dislike: number;
  commentId: string;
};

type ReplyComments = {
  id: string;
  name: string;
};

export default function CommentSection() {
  const [isLoadingSubmit, setLoadingSubmit] = useState(false);
  const [comments, setComments] = useState<Komentar[]>([]);
  const [isLoadingFetch, setLoadingFetch] = useState(true);
  const [fetchComments, setFetchComments] = useState(true);
  const [replyComments, setReplyComments] = useState<ReplyComments>();
  const [replySuccess, setReplySuccess] = useState(false);
  const [page, setPage] = useState(1);
  const [commentsVisible, setCommentsVisible] = useState(5);
  const [commentSum, setCommentSum] = useState(0);

  useEffect(() => {
    if (fetchComments) {
      setLoadingFetch(true);

      fetch(`/api/comments?limit=${commentsVisible}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setLoadingFetch(false);
          setFetchComments(false);
          setCommentSum(data.commentSum);
        });
    }
  }, [fetchComments]);

  useEffect(() => {
    setFetchComments(true);
  }, [commentsVisible, page]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoadingSubmit(true);

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/comments", {
      method: "POST",
      body: formData,
    });

    console.log(response);

    if (response.ok) {
      // @ts-ignore
      document.getElementById("my_modal_5").showModal();
      setLoadingSubmit(false);
      setFetchComments(true);
    }
  }

  async function submitSubcomment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoadingSubmit(true);

    const formData = new FormData(event.currentTarget);

    const name = formData.get("nama") ?? "";
    const komentar = formData.get("komentar") ?? "";
    const replyTo = replyComments?.name ?? "";
    const id = replyComments?.id ?? "";

    const dataForm = new FormData();
    dataForm.append("nama", name);
    dataForm.append("komentar", komentar);
    dataForm.append("replyTo", replyTo);
    dataForm.append("commentId", id);

    const response = await fetch("/api/subcomments", {
      method: "POST",
      body: dataForm,
    });

    if (response.ok) {
      setReplySuccess(true);
      setLoadingSubmit(false);
      setFetchComments(true);

      // @ts-ignore
      document.getElementById("subcomment-name").value = "";
      // @ts-ignore
      document.getElementById("subcomment-content").value = "";
    }
  }

  function showSubcommentForm(id: string, name: string) {
    setReplyComments({
      id,
      name,
    });
    setReplySuccess(false);

    // @ts-ignore
    document.getElementById("subcomment-form").showModal();
  }

  return (
    <section id="comments" className="max-[639px]:p-10 p-20">
      <h1 className="text-xl w-full text-center font-bold underline underline-offset-8">
        Komentar
      </h1>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sukses !</h3>
          <p className="py-4">Komentar berhasil dipublish</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Tutup</button>
            </form>
          </div>
        </div>
      </dialog>

      <form className="mt-8" onSubmit={onSubmit}>
        <div className="w-full">
          <h1>Nama</h1>
          <input
            type="text"
            placeholder="Nama Anda"
            name="nama"
            className="input mt-2 w-full bg-lightBlue"
            required
          />
        </div>
        <div className="mt-4 w-full">
          <h1>Komentar</h1>

          <textarea
            className="textarea w-full mt-2 min-h-32 bg-lightBlue"
            placeholder="Komentar Anda"
            name="komentar"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-center ">
          <button className="btn btn-active btn-outline mt-4 shadow-lg">
            {isLoadingSubmit ? (
              <div className="flex gap-2 items-center">
                <span className="loading loading-spinner loading-sm"></span>
                Loading
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>

      <div className="w-full rounded-xl p-5 bg-lightBlue shadow mt-7 ">
        {isLoadingFetch ? (
          <div className="w-full rounded-xl bg-lightBlue shadow">
            <div className="flex gap-4 w-full flex-col">
              <div>
                <div className="skeleton bg-white h-4 w-16 mb-2"></div>
                <div className="skeleton bg-white h-4 w-80 mb-1"></div>
                <div className="skeleton bg-white h-4 w-40"></div>
              </div>

              <div>
                <div className="skeleton bg-white h-4 w-20 mb-2"></div>
                <div className="skeleton bg-white h-4 w-64"></div>
              </div>

              <div>
                <div className="skeleton bg-white h-4 w-14 mb-2"></div>
                <div className="skeleton bg-white h-4 w-72"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full grid grid-cols-1 gap-4 justify-items-center">
              <select
                className="select bg-accentBlue shadow"
                defaultValue={commentsVisible}
                onChange={(val) =>
                  setCommentsVisible(parseInt(val.target.value))
                }
              >
                <option value={5}>Tampilkan 5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={commentSum}>Semua</option>
              </select>
            </div>

            {comments?.length ? (
              comments.map((element, index) => (
                <div key={index} className="overflow-hidden">
                  <CommentBox
                    comment={element}
                    key={index}
                    showSubcommentForm={showSubcommentForm}
                  />
                </div>
              ))
            ) : (
              <h1 className="w-full text-center">Belum ada komentar</h1>
            )}
          </div>
        )}
      </div>

      {/* Subcomment Modal */}
      <dialog id="subcomment-form" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Balas Komentar {replyComments?.name}
          </h3>
          <form className="mt-4" onSubmit={submitSubcomment}>
            <div className="w-full">
              <h1>Nama</h1>
              <input
                type="text"
                placeholder="Nama Anda"
                name="nama"
                id="subcomment-name"
                className="outline-offset-4 border border-gray-700 bg-[#1D232A] outline-none focus:outline focus:outline-[#1D232A] text-gray-300 px-4 py-3 rounded-lg w-full mt-2"
                required
              />
            </div>
            <div className="mt-4 w-full">
              <h1>Komentar</h1>
              <textarea
                className="textarea w-full mt-2 min-h-32 textarea-bordered"
                placeholder="Komentar Anda"
                name="komentar"
                id="subcomment-content"
                required
              ></textarea>
            </div>
            {replySuccess ? (
              <div role="alert" className="alert alert-success mt-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Reply telah terkirim!</span>
              </div>
            ) : null}

            <div className="w-full flex justify-center">
              <button className="btn btn-active btn-neutral mt-4">
                {isLoadingSubmit ? (
                  <div className="flex gap-2 items-center">
                    <span className="loading loading-spinner loading-sm"></span>
                    Loading
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
}

type CommentProps = {
  comment: Komentar;
  showSubcommentForm: (id: string, name: string) => void;
};

type SubcommentProps = {
  subcomment: SubKomentar;
  showSubcommentForm: (id: string, name: string) => void;
  commentId: string;
};

function SubCommentBox({
  subcomment,
  showSubcommentForm,
  commentId,
}: SubcommentProps) {
  const [likes, setLikes] = useState(subcomment.like);
  const [dislikes, setDislikes] = useState(subcomment.dislike);
  const [response, setResponse] = useState("");

  async function addLikes(commentType: string) {
    setLikes(likes + 1);
    setResponse("liked");

    if (dislikes !== 0 && response === "disliked") {
      setDislikes(dislikes - 1);
    }

    const data = new FormData();

    data.append("type", commentType);
    data.append("id", subcomment.id);

    await fetch("/api/like", {
      method: "POST",
      body: data,
    });
  }

  async function addDislikes(commentType: string) {
    setDislikes(dislikes + 1);
    setResponse("disliked");

    if (likes !== 0 && response === "liked") {
      setLikes(likes - 1);
    }

    const data = new FormData();

    data.append("type", commentType);
    data.append("id", subcomment.id);

    await fetch("/api/dislike", {
      method: "POST",
      body: data,
    });
  }

  return (
    <div>
      <div className="flex relative">
        <div className="w-full pr-16">
          <div className="flex gap-1 items-center">
            <h1 className="font-semibold">{subcomment.name}</h1>
            <FaChevronRight className="text-[0.5rem]" />
            <h1>{subcomment.replyTo}</h1>
          </div>
          <h1 className="break-words whitespace-pre-wrap">
            {subcomment.content}
          </h1>
        </div>
        <div className="absolute right-0 flex items-center h-full gap-3">
          <div>
            {response === "liked" ? (
              <button className="cursor-pointer">
                <AiFillLike className="text-xl mb-1" />
                <p className="text-xs">{likes}</p>
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => addLikes("subcomments")}
              >
                <AiOutlineLike className="text-xl mb-1" />
                <p className="text-xs">{likes}</p>
              </button>
            )}
          </div>
          <div>
            {response === "disliked" ? (
              <button className="cursor-pointer">
                <AiFillDislike className="text-xl mb-1" />
                <p className="text-xs">{dislikes}</p>
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => addDislikes("subcomments")}
              >
                <AiOutlineDislike className="text-xl mb-1" />
                <p className="text-xs">{dislikes}</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <IoReturnDownForwardOutline className="text-xs" />

        <button
          className="text-xs"
          onClick={() => showSubcommentForm(commentId, subcomment.name)}
        >
          Reply
        </button>
      </div>
    </div>
  );
}

function CommentBox({ comment, showSubcommentForm }: CommentProps) {
  const [likes, setLikes] = useState(comment.like);
  const [dislikes, setDislikes] = useState(comment.dislike);
  const [response, setResponse] = useState("");
  const [showReply, setShowReply] = useState(false);

  async function addLikes(commentType: string) {
    setLikes(likes + 1);
    setResponse("liked");

    if (dislikes !== 0 && response === "disliked") {
      setDislikes(dislikes - 1);
    }

    const data = new FormData();

    data.append("type", commentType);
    data.append("id", comment.id);

    await fetch("/api/like", {
      method: "POST",
      body: data,
    });
  }

  async function addDislikes(commentType: string) {
    setDislikes(dislikes + 1);
    setResponse("disliked");

    if (likes !== 0 && response === "liked") {
      setLikes(likes - 1);
    }

    const data = new FormData();

    data.append("type", commentType);
    data.append("id", comment.id);

    await fetch("/api/dislike", {
      method: "POST",
      body: data,
    });
  }

  return (
    <div>
      <div className="flex relative justify-between gap-3 items-center">
        <div className="w-full pr-16">
          <h1 className="font-semibold">{comment.name}</h1>
          <div className="break-words whitespace-pre-wrap w-full">
            {comment.content}
          </div>
        </div>
        <div className="absolute right-0 grid grid-cols-2 gap-3">
          <div>
            {response === "liked" ? (
              <button className="cursor-pointer">
                <AiFillLike className="text-xl mb-1" />
                <p className="text-xs">{likes}</p>
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => addLikes("comments")}
              >
                <AiOutlineLike className="text-xl mb-1" />
                <p className="text-xs">{likes}</p>
              </button>
            )}
          </div>
          <div>
            {response === "disliked" ? (
              <button className="cursor-pointer">
                <AiFillDislike className="text-xl mb-1" />
                <p className="text-xs">{dislikes}</p>
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => addDislikes("comments")}
              >
                <AiOutlineDislike className="text-xl mb-1" />
                <p className="text-xs">{dislikes}</p>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <IoReturnDownForwardOutline className="text-xs" />

        <button
          className="text-xs"
          onClick={() => showSubcommentForm(comment.id, comment.name)}
        >
          Reply
        </button>
      </div>

      {/* Subcomment Iteration */}
      {comment.subcomment.length ? (
        <div className="ml-[1.3rem]">
          {showReply ? (
            <div className="pt-4 pb-2 grid grid-cols-1 gap-4">
              {comment.subcomment.map((ele, idx) => (
                <SubCommentBox
                  key={idx}
                  commentId={comment.id}
                  subcomment={ele}
                  showSubcommentForm={showSubcommentForm}
                />
              ))}
            </div>
          ) : (
            <div className="pt-2">
              <button className="text-xs" onClick={() => setShowReply(true)}>
                Show All Reply ?
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
