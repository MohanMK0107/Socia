"use client";

import React, { useMemo, useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { RiPushpinLine, RiUnpinLine } from "react-icons/ri";
import { BiBellOff, BiBell } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

type ChatUser = {
  id: number;
  name: string;
  last_message: string;
  sent: string;
  pinned: boolean;
  mute: boolean;
  image: string;
  message_type: "text" | "image" | "video";
  unread: number;
  isOnline: boolean;
};

const initialChatUsers: ChatUser[] = [
  {
    id: 1,
    name: "Alex Morgan",
    last_message: "Hey! Are we meeting today?",
    sent: "2m",
    pinned: true,
    mute: false,
    image: "https://i.pravatar.cc/150?img=11",
    message_type: "text",
    unread: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: "Sophia Williams",
    last_message: "Sent a photo",
    sent: "15m",
    pinned: true,
    mute: false,
    image: "https://i.pravatar.cc/150?img=47",
    message_type: "image",
    unread: 1,
    isOnline: true,
  },
  {
    id: 3,
    name: "Daniel Smith",
    last_message: "Let's catch up this weekend!",
    sent: "1h",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=12",
    message_type: "text",
    unread: 0,
    isOnline: false,
  },
  {
    id: 4,
    name: "Olivia Brown",
    last_message: "Sent a video",
    sent: "3h",
    pinned: false,
    mute: true,
    image: "https://i.pravatar.cc/150?img=44",
    message_type: "video",
    unread: 0,
    isOnline: true,
  },
  {
    id: 5,
    name: "Ethan Wilson",
    last_message: "That project looks amazing 🔥",
    sent: "5h",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=13",
    message_type: "text",
    unread: 3,
    isOnline: false,
  },
  {
    id: 6,
    name: "Isabella Garcia",
    last_message: "Sent a photo",
    sent: "1d",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=48",
    message_type: "image",
    unread: 0,
    isOnline: true,
  },
  {
    id: 7,
    name: "Noah Anderson",
    last_message: "Okay, see you tomorrow!",
    sent: "2d",
    pinned: false,
    mute: true,
    image: "https://i.pravatar.cc/150?img=14",
    message_type: "text",
    unread: 0,
    isOnline: false,
  },
  {
    id: 8,
    name: "Emma Thomas",
    last_message: "Sent a video",
    sent: "3d",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=49",
    message_type: "video",
    unread: 0,
    isOnline: false,
  },
  {
    id: 9,
    name: "Liam Martinez",
    last_message: "Bro that was hilarious 😂",
    sent: "1w",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=15",
    message_type: "text",
    unread: 0,
    isOnline: true,
  },
  {
    id: 10,
    name: "Ava Robinson",
    last_message: "Sent a photo",
    sent: "2w",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=50",
    message_type: "image",
    unread: 0,
    isOnline: false,
  },
  {
    id: 11,
    name: "James Clark",
    last_message: "Thanks for sharing!",
    sent: "3w",
    pinned: false,
    mute: true,
    image: "https://i.pravatar.cc/150?img=16",
    message_type: "text",
    unread: 0,
    isOnline: false,
  },
  {
    id: 12,
    name: "Mia Lewis",
    last_message: "Hey, long time no see!",
    sent: "4w",
    pinned: false,
    mute: false,
    image: "https://i.pravatar.cc/150?img=51",
    message_type: "text",
    unread: 0,
    isOnline: true,
  },
];

type MessageSidebarProps = {
  onSelectChat?: (chat: ChatUser) => void;
  selectedChatId?: number | null;
};

const MessageSidebar = ({
  onSelectChat,
  selectedChatId = null,
}: MessageSidebarProps) => {
  const [chatUsers, setChatUsers] = useState<ChatUser[]>(initialChatUsers);

  const [chatMenu, setChatMenu] = useState<number | null>(null);

  const [search, setSearch] = useState("");

  // Search and sort chats
  const filteredChats = useMemo(() => {
    return [...chatUsers]
      .filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => Number(b.pinned) - Number(a.pinned));
  }, [chatUsers, search]);

  // Pin / Unpin
  const togglePin = (id: number) => {
    setChatUsers((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? { ...chat, pinned: !chat.pinned }
          : chat
      )
    );

    setChatMenu(null);
  };

  // Mute / Unmute
  const toggleMute = (id: number) => {
    setChatUsers((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? { ...chat, mute: !chat.mute }
          : chat
      )
    );

    setChatMenu(null);
  };

  // Delete chat
  const deleteChat = (id: number) => {
    setChatUsers((prev) =>
      prev.filter((chat) => chat.id !== id)
    );

    setChatMenu(null);
  };

  // Last message preview
  const getLastMessage = (chat: ChatUser) => {
    switch (chat.message_type) {
      case "image":
        return "📷 Photo";

      case "video":
        return "🎥 Video";

      default:
        return chat.last_message;
    }
  };

  return (
    <div
      className="h-full border-r border-slate-400/30 flex flex-col f-inter px-1 overflow-hidden"
      onClick={() => {
        if (chatMenu !== null) setChatMenu(null);
      }}
    >
      {/* Profile name */}
      <div className="flex items-center justify-between p-3">
        <h2 className="text-xl font-semibold">_user_4567</h2>

        <button
          className="cursor-pointer hover:bg-white/10 p-2 rounded-full"
          aria-label="New message"
        >
          <HiOutlinePencilAlt className="w-7 h-7" />
        </button>
      </div>

      {/* Search */}
      <div className="bg-white/10 flex items-center gap-2 px-3 py-2 mx-3 rounded-lg text-slate-500">
        <IoIosSearch className="w-6 h-6 shrink-0" />

        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none bg-transparent text-sm text-[var(--foreground)] placeholder:text-slate-500"
        />
      </div>

      {/* Chat users list */}
      <div className="py-4 overflow-y-auto flex-1">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onSelectChat?.(chat)}
              className={`group flex items-center justify-between py-3 px-3 rounded-xl cursor-pointer transition-all ${
                selectedChatId === chat.id
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              {/* Profile image */}
              <div className="relative shrink-0">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-[55px] h-[55px] rounded-full object-cover"
                />

                {chat.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--background)] rounded-full" />
                )}
              </div>

              {/* Chat details */}
              <div className="w-full min-w-0 flex items-center justify-between pl-3">
                <div className="w-full min-w-0">
                  {/* Name */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-medium truncate">
                      {chat.name}
                    </h3>

                    {chat.pinned && (
                      <RiPushpinLine className="w-4 h-4 shrink-0 text-slate-400" />
                    )}

                    {chat.mute && (
                      <BiBellOff className="w-4 h-4 shrink-0 text-slate-400" />
                    )}
                  </div>

                  {/* Last message */}
                  <div className="mt-1 text-[13px] text-slate-500 flex items-center gap-2">
                    <p className="truncate max-w-[180px]">
                      {getLastMessage(chat)}
                    </p>

                    <span className="shrink-0">
                      {chat.sent}
                    </span>
                  </div>
                </div>

                {/* Unread count and menu */}
                <div className="flex items-center gap-2 shrink-0">
                  {chat.unread > 0 && (
                    <span className="bg-blue-500 text-white text-[11px] min-w-5 h-5 px-1 flex items-center justify-center rounded-full">
                      {chat.unread}
                    </span>
                  )}

                  {/* Menu */}
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        setChatMenu(
                          chatMenu === chat.id ? null : chat.id
                        )
                      }
                      className="p-1 hover:bg-white/10 rounded-full"
                      aria-label={`Options for ${chat.name}`}
                    >
                      <CiMenuKebab className="w-5 h-5 rotate-90 text-slate-400" />
                    </button>

                    {chatMenu === chat.id && (
                      <div className="absolute z-50 w-40 bg-[#242526] flex flex-col p-2 rounded-xl right-0 top-7 shadow-xl border border-white/10">
                        {/* Pin */}
                        <button
                          onClick={() => togglePin(chat.id)}
                          className="flex items-center justify-between px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer"
                        >
                          <span className="text-sm">
                            {chat.pinned ? "Unpin" : "Pin"}
                          </span>

                          {chat.pinned ? (
                            <RiUnpinLine className="w-5 h-5" />
                          ) : (
                            <RiPushpinLine className="w-5 h-5" />
                          )}
                        </button>

                        {/* Mute */}
                        <button
                          onClick={() => toggleMute(chat.id)}
                          className="flex items-center justify-between px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer"
                        >
                          <span className="text-sm">
                            {chat.mute ? "Unmute" : "Mute"}
                          </span>

                          {chat.mute ? (
                            <BiBellOff className="w-5 h-5" />
                          ) : (
                            <BiBell className="w-5 h-5" />
                          )}
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => deleteChat(chat.id)}
                          className="flex items-center justify-between px-3 py-2 text-red-400 hover:bg-white/10 rounded-lg cursor-pointer"
                        >
                          <span className="text-sm">Delete</span>

                          <AiOutlineDelete className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-slate-500">
            <IoIosSearch className="w-10 h-10 mb-2" />
            <p className="text-sm">No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageSidebar;