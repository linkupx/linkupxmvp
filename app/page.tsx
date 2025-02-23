'use client';

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface Pro {
  id: number;
  name: string;
  image: string;
  rating: number;
  experience: string;
  price: string;
}

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("탐색");
  const [showProRegistration, setShowProRegistration] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showScheduleManagement, setShowScheduleManagement] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showIntroRequest, setShowIntroRequest] = useState(false);
  const [showIntroHistory, setShowIntroHistory] = useState(false);
  const [showIntroRequests, setShowIntroRequests] = useState(false);
  const [selectedPro, setSelectedPro] = useState<Pro | null>(null);
  const [introRequest, setIntroRequest] = useState({
    lessonArea: "",
    desiredArea: "",
    time: "",
    count: "",
    message: "",
  });
  const [introHistory] = useState([
    {
      id: 1,
      pro: "Michael Anderson",
      status: "accepted",
      date: "2025-02-11",
      contact: "+1 234-567-8900",
      message: "Looking forward to our lesson!",
    },
    {
      id: 2,
      pro: "Sarah Thompson",
      status: "pending",
      date: "2025-02-12",
      message: "Interested in improving my swing",
    },
  ]);
  const [introRequests] = useState([
    {
      id: 1,
      member: "David Kim",
      area: "Swing Basics",
      time: "Weekends",
      count: "5 lessons",
      message: "I want to learn proper swing techniques",
      status: "pending",
    },
  ]);
  const [showPointExchange, setShowPointExchange] = useState(false);
  const [showPointUse, setShowPointUse] = useState(false);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [showReviewsDialog, setShowReviewsDialog] = useState(false);
  const [currentRating, setCurrentRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [proReviews] = useState([
    {
      id: 1,
      memberName: "David Lee",
      rating: 5,
      comment: "Great instructor! Very patient and professional.",
      date: "2025-02-10",
      verified: true,
    },
    {
      id: 2,
      memberName: "Sarah Kim",
      rating: 4,
      comment: "Helped improve my swing technique significantly.",
      date: "2025-02-09",
      verified: true,
    },
  ]);
  const [proProfile, setProProfile] = useState({
    name: "",
    certification: "",
    mainLesson: "",
    experience: "",
    intro: "",
    area: "",
    fee: "",
    photo: "",
    isPublic: true,
    availability: [],
  });

  const handleProRegistration = () => {
    // Handle pro registration logic here
    setShowProRegistration(false);
  };

  const handleProfileEdit = () => {
    // Handle profile edit logic here
    setShowProfileEdit(false);
  };

  const handleScheduleUpdate = () => {
    // Handle schedule update logic here
    setShowScheduleManagement(false);
  };

  const handleProfileSettings = () => {
    // Handle profile settings update logic here
    setShowProfileSettings(false);
  };

  const featuredPros = [
    {
      id: 1,
      name: "Michael Anderson",
      image:
        "https://public.readdy.ai/ai/img_res/b70272a6e8df682da26a3bde8a943b05.jpg",
      rating: 4.9,
      experience: "15+ years",
      price: "$120/hour",
    },
    {
      id: 2,
      name: "Sarah Thompson",
      image:
        "https://public.readdy.ai/ai/img_res/7424d2e5f01542b16dfdd9536bafcff3.jpg",
      rating: 4.8,
      experience: "12+ years",
      price: "$110/hour",
    },
  ];

  const upcomingMatches = [
    {
      id: 1,
      title: "Training Session",
      pro: "Michael Anderson",
      date: "Feb 14, 2025",
      time: "09:00 AM",
      location: "Pine Valley Golf Club",
    },
    {
      id: 2,
      title: "Technique Review",
      pro: "Sarah Thompson",
      date: "Feb 16, 2025",
      time: "02:00 PM",
      location: "Augusta National",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Review",
      user: "James Wilson",
      action: "left a 5-star review",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "Match",
      user: "Emma Davis",
      action: "completed a training session",
      time: "5 hours ago",
    },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setProProfile({ ...proProfile, [field]: e.target.value });
  };

  const handleIntroRequestChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setIntroRequest({ ...introRequest, [field]: e.target.value });
  };

  const handleSelectChange = (value: string, field: string) => {
    setIntroRequest({ ...introRequest, [field]: value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-[375px] min-h-[762px] bg-white relative pb-16 shadow-xl rounded-xl">
        {/* Top Navigation */}
        <div className="fixed top-0 w-[375px] bg-white z-50 border-b rounded-t-xl">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="text-xl font-semibold text-green-700">LinkUp X</div>
            <div className="flex items-center gap-4">
              <i className="fas fa-bell text-gray-600"></i>
              <Badge className="bg-green-100 text-green-800">Member</Badge>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <ScrollArea className="h-full pt-14">
          <div className="p-4 space-y-6">
            {selectedTab === "탐색" && (
              <>
                {/* Featured Pros */}
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">
                    Featured Professionals
                  </h2>
                  <div className="flex gap-4 overflow-x-auto">
                    {featuredPros.map((pro) => (
                      <Card key={pro.id} className="flex-shrink-0 w-[280px] p-4">
                        <div className="flex gap-4">
                          <Avatar className="h-16 w-16">
                            <Image
                              src={pro.image}
                              alt={pro.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{pro.name}</h3>
                            <div className="text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                {pro.rating}
                              </div>
                              <div>{pro.experience}</div>
                              <div>{pro.price}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button
                            className="flex-1 !rounded-button"
                            onClick={() => {
                              setSelectedPro(pro);
                              setShowIntroRequest(true);
                            }}
                          >
                            <i className="fas fa-handshake mr-2"></i>Request Intro
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
                {/* Upcoming Matches */}
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
                  <div className="space-y-3">
                    {upcomingMatches.map((match) => (
                      <Card key={match.id} className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{match.title}</h3>
                            <div className="text-sm text-gray-600">
                              <div>with {match.pro}</div>
                              <div>
                                {match.date} at {match.time}
                              </div>
                              <div>{match.location}</div>
                            </div>
                          </div>
                          <Button variant="outline" className="!rounded-button">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            Details
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
                {/* Recent Activity */}
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => (
                      <Card key={activity.id} className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <i
                              className={`fas ${activity.type === "Review" ? "fa-star" : "fa-golf-ball"} text-green-700`}
                            ></i>
                          </div>
                          <div>
                            <div className="font-medium">{activity.user}</div>
                            <div className="text-sm text-gray-600">
                              {activity.action}
                            </div>
                            <div className="text-xs text-gray-500">
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </>
            )}
            {selectedTab === "소개" && (
              <div className="space-y-6">
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">골프 프로 매칭 서비스</h2>
                  <Card className="p-4">
                    <p className="text-gray-600 mb-4">
                      최고의 골프 프로와 함께 실력을 향상시켜보세요
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-3">
                        <div className="text-center">
                          <i className="fas fa-users text-2xl text-green-700 mb-2"></i>
                          <h3 className="font-medium">검증된 프로</h3>
                          <p className="text-sm text-gray-500">
                            200+ 명의 전문가
                          </p>
                        </div>
                      </Card>
                      <Card className="p-3">
                        <div className="text-center">
                          <i className="fas fa-medal text-2xl text-green-700 mb-2"></i>
                          <h3 className="font-medium">맞춤 레슨</h3>
                          <p className="text-sm text-gray-500">
                            개인별 맞춤 교육
                          </p>
                        </div>
                      </Card>
                    </div>
                  </Card>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">이용 방법</h2>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "search",
                        title: "프로 검색",
                        desc: "실력과 리뷰를 확인하여 프로를 선택하세요",
                      },
                      {
                        icon: "calendar-check",
                        title: "일정 예약",
                        desc: "원하는 시간에 레슨을 예약하세요",
                      },
                      {
                        icon: "golf-ball",
                        title: "레슨 진행",
                        desc: "전문적인 1:1 맞춤 레슨을 받아보세요",
                      },
                    ].map((step, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="flex gap-4">
                          <div className="bg-green-100 p-3 rounded-full h-fit">
                            <i
                              className={`fas fa-${step.icon} text-green-700`}
                            ></i>
                          </div>
                          <div>
                            <h3 className="font-medium">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {selectedTab === "프로필" && (
              <div className="space-y-6">
                <section className="text-center mb-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <Image
                      src="https://public.readdy.ai/ai/img_res/de7d08256e797adaaa7938f93a73b643.jpg"
                      alt="Profile"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </Avatar>
                  <h2 className="text-xl font-semibold">김준호</h2>
                  <p className="text-gray-600">골프 열정가</p>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">나의 통계</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-semibold text-green-700">
                        12
                      </div>
                      <div className="text-sm text-gray-600">완료한 레슨</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-semibold text-green-700">
                        89
                      </div>
                      <div className="text-sm text-gray-600">핸디캡</div>
                    </Card>
                  </div>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">설정</h2>
                  <div className="space-y-3">
                    {[
                      { icon: "user", label: "계정 정보" },
                      { icon: "golf-ball", label: "프로 등록" },
                      { icon: "edit", label: "프로필 편집" },
                      { icon: "calendar", label: "일정 관리" },
                      { icon: "cog", label: "프로필 설정" },
                      { icon: "bell", label: "알림 설정" },
                      { icon: "shield-alt", label: "개인정보 보호" },
                      { icon: "history", label: "소개 내역" },
                      { icon: "inbox", label: "소개 요청" },
                      { icon: "question-circle", label: "도움말" },
                    ].map((item, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-start !rounded-button"
                        onClick={() => {
                          if (item.label === "프로 등록") {
                            setShowProRegistration(true);
                          } else if (item.label === "프로필 편집") {
                            setShowProfileEdit(true);
                          } else if (item.label === "일정 관리") {
                            setShowScheduleManagement(true);
                          } else if (item.label === "프로필 설정") {
                            setShowProfileSettings(true);
                          } else if (item.label === "소개 내역") {
                            setShowIntroHistory(true);
                          } else if (item.label === "소개 요청") {
                            setShowIntroRequests(true);
                          }
                        }}
                      >
                        <i className={`fas fa-${item.icon} w-8`}></i>
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {selectedTab === "검색" && (
              <div className="space-y-6">
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="프로 이름 또는 골프장 검색"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <section className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Select defaultValue="name">
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Search by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="name">Pro Name</SelectItem>
                            <SelectItem value="lesson">Lesson Area</SelectItem>
                            <SelectItem value="area">Area</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <Input placeholder="Enter keywords" className="pr-10" />
                          <Button
                            variant="ghost"
                            className="absolute right-0 top-0 h-full px-3"
                          >
                            <i className="fas fa-search text-gray-400"></i>
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h2 className="text-lg font-semibold">
                            Recommended Pros
                          </h2>
                          <Select defaultValue="rating">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="interest">
                                By Interest
                              </SelectItem>
                              <SelectItem value="rating">By Rating</SelectItem>
                              <SelectItem value="new">Newly Added</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          {[
                            {
                              name: "David Park",
                              image:
                                "https://public.readdy.ai/ai/img_res/a2a73124bab05d76cfcc222ab9e4d40d.jpg",
                              interests: ["Swing Analysis", "Short Game"],
                              rating: 4.9,
                              new: true,
                            },
                            {
                              name: "Emma Wilson",
                              image:
                                "https://public.readdy.ai/ai/img_res/2c291038a6f0443cfd7c16afaccb6e66.jpg",
                              interests: ["Putting", "Course Strategy"],
                              rating: 4.8,
                            },
                          ].map((pro, idx) => (
                            <Card key={idx} className="p-4">
                              <div className="flex gap-4">
                                <Avatar className="h-16 w-16">
                                  <Image
                                    src={pro.image}
                                    alt={pro.name}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                  />
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium flex items-center gap-2">
                                        {pro.name}
                                        {pro.new && (
                                          <Badge className="bg-green-100 text-green-800">
                                            New
                                          </Badge>
                                        )}
                                      </h3>
                                      <div className="flex items-center gap-1 text-sm text-gray-600">
                                        <i className="fas fa-star text-yellow-400"></i>
                                        {pro.rating}
                                      </div>
                                    </div>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="!rounded-full"
                                    >
                                      <i className="fas fa-share-alt"></i>
                                    </Button>
                                  </div>
                                  <div className="flex gap-2 mt-2">
                                    {pro.interests.map((interest, i) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {interest}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Popular Pros</h2>
                        <div className="space-y-3">
                          {[
                            {
                              name: "John Miller",
                              image:
                                "https://public.readdy.ai/ai/img_res/f86c607a9dabba164ad241a70273f610.jpg",
                              introCount: 128,
                              rating: 4.9,
                            },
                            {
                              name: "Sarah Chen",
                              image:
                                "https://public.readdy.ai/ai/img_res/4cd6fdb34c8def7108b7e2f1f466be78.jpg",
                              introCount: 96,
                              rating: 4.8,
                            },
                          ].map((pro, idx) => (
                            <Card key={idx} className="p-4">
                              <div className="flex gap-4">
                                <Avatar className="h-16 w-16">
                                  <Image
                                    src={pro.image}
                                    alt={pro.name}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                  />
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium">{pro.name}</h3>
                                      <div className="flex items-center gap-1 text-sm text-gray-600">
                                        <i className="fas fa-star text-yellow-400"></i>
                                        {pro.rating}
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm font-medium">
                                        {pro.introCount}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Intros
                                      </div>
                                    </div>
                                  </div>
                                  <Button className="w-full mt-3 !rounded-button">
                                    <i className="fas fa-handshake mr-2"></i>
                                    Request Intro
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold">Popular Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Driver Lesson",
                        "Putting",
                        "Swing Fix",
                        "Distance",
                        "Bunker Shot",
                      ].map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">추천 골프장</h2>
                  <div className="space-y-3">
                    {[
                      {
                        name: "파인크리크 CC",
                        location: "경기도 용인시",
                        rating: "4.8",
                      },
                      {
                        name: "남서울 CC",
                        location: "경기도 성남시",
                        rating: "4.7",
                      },
                    ].map((course, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{course.name}</h3>
                            <p className="text-sm text-gray-600">
                              {course.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <i className="fas fa-star text-yellow-400"></i>
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {selectedTab === "리워드" && (
              <div className="space-y-6">
                <section className="text-center bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    2,450
                  </div>
                  <div className="text-gray-600">Available Points</div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="!rounded-button"
                      onClick={() => setShowPointExchange(true)}
                    >
                      <i className="fas fa-exchange-alt mr-2"></i>Exchange Points
                    </Button>
                    <Button
                      variant="outline"
                      className="!rounded-button"
                      onClick={() => setShowPointUse(true)}
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>Use Points
                    </Button>
                  </div>
                </section>
                <section className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Member Introduction</h2>
                    <Button
                      variant="ghost"
                      className="text-green-700"
                      onClick={() => {}}
                    >
                      <i className="fas fa-plus mr-2"></i>Introduce
                    </Button>
                  </div>
                  <Card className="p-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">
                        Earn points by introducing new members!
                      </p>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-user-plus text-green-700"></i>
                        <span>500 points per successful introduction</span>
                      </div>
                    </div>
                  </Card>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">포인트 혜택</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "gift", title: "레슨 할인", points: "1,000P" },
                      { icon: "tshirt", title: "골프용품", points: "2,000P" },
                      { icon: "coffee", title: "카페이용", points: "500P" },
                      { icon: "car", title: "주차권", points: "800P" },
                    ].map((reward, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="text-center">
                          <i
                            className={`fas fa-${reward.icon} text-2xl text-green-700 mb-2`}
                          ></i>
                          <h3 className="font-medium">{reward.title}</h3>
                          <p className="text-sm text-gray-600">{reward.points}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold">Points History</h2>
                  <div className="space-y-3">
                    {[
                      {
                        type: "earned",
                        desc: "Lesson Participation",
                        points: "+300",
                        date: "2025.02.11",
                      },
                      {
                        type: "earned",
                        desc: "Member Introduction Reward",
                        points: "+500",
                        date: "2025.02.10",
                      },
                      {
                        type: "used",
                        desc: "Equipment Purchase",
                        points: "-500",
                        date: "2025.02.09",
                      },
                      {
                        type: "earned",
                        desc: "Pro Introduction Reward",
                        points: "+1000",
                        date: "2025.02.08",
                      },
                    ].map((history, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{history.desc}</div>
                            <div className="text-sm text-gray-500">
                              {history.date}
                            </div>
                          </div>
                          <div
                            className={
                              history.type === "적립"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {history.points}P
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </ScrollArea>
        {/* Pro Registration Dialog */}
        <Dialog open={showProRegistration} onOpenChange={setShowProRegistration}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로 등록</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>이름</Label>
                <Input
                  value={proProfile.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>자격증</Label>
                <Input
                  value={proProfile.certification}
                  onChange={(e) => handleInputChange(e, "certification")}
                  placeholder="자격증을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>주요 레슨</Label>
                <Input
                  value={proProfile.mainLesson}
                  onChange={(e) => handleInputChange(e, "mainLesson")}
                  placeholder="주요 레슨을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>경력</Label>
                <Input
                  value={proProfile.experience}
                  onChange={(e) => handleInputChange(e, "experience")}
                  placeholder="경력을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>소개</Label>
                <Textarea
                  value={proProfile.intro}
                  onChange={(e) => handleInputChange(e, "intro")}
                  placeholder="자기소개를 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>활동 지역</Label>
                <Input
                  value={proProfile.area}
                  onChange={(e) => handleInputChange(e, "area")}
                  placeholder="활동 지역을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>레슨 비용</Label>
                <Input
                  value={proProfile.fee}
                  onChange={(e) => handleInputChange(e, "fee")}
                  placeholder="시간당 레슨 비용을 입력해주세요"
                />
              </div>
              <div className="grid gap-2">
                <Label>프로필 사진</Label>
                <Input
                  type="file"
                  onChange={(e) => handleInputChange(e, "photo")}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleProRegistration} className="!rounded-button">
                등록하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Profile Edit Dialog */}
        <Dialog open={showProfileEdit} onOpenChange={setShowProfileEdit}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로필 편집</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>주요 레슨</Label>
                <Input
                  value={proProfile.mainLesson}
                  onChange={(e) => handleInputChange(e, "mainLesson")}
                />
              </div>
              <div className="grid gap-2">
                <Label>경력</Label>
                <Input
                  value={proProfile.experience}
                  onChange={(e) => handleInputChange(e, "experience")}
                />
              </div>
              <div className="grid gap-2">
                <Label>소개</Label>
                <Textarea
                  value={proProfile.intro}
                  onChange={(e) => handleInputChange(e, "intro")}
                />
              </div>
              <div className="grid gap-2">
                <Label>활동 지역</Label>
                <Input
                  value={proProfile.area}
                  onChange={(e) => handleInputChange(e, "area")}
                />
              </div>
              <div className="grid gap-2">
                <Label>레슨 비용</Label>
                <Input
                  value={proProfile.fee}
                  onChange={(e) => handleInputChange(e, "fee")}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleProfileEdit} className="!rounded-button">
                저장하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Schedule Management Dialog */}
        <Dialog
          open={showScheduleManagement}
          onOpenChange={setShowScheduleManagement}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>일정 관리</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <Label>{day}요일</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="시간 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">종일</SelectItem>
                      <SelectItem value="morning">오전</SelectItem>
                      <SelectItem value="afternoon">오후</SelectItem>
                      <SelectItem value="none">불가능</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button onClick={handleScheduleUpdate} className="!rounded-button">
                저장하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Intro Request Dialog */}
        <Dialog open={showIntroRequest} onOpenChange={setShowIntroRequest}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Request Introduction to {selectedPro?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Lesson Area</Label>
                <Select
                  onValueChange={(value) => handleSelectChange(value, "lessonArea")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select lesson area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swing">Swing Basics</SelectItem>
                    <SelectItem value="putting">Putting</SelectItem>
                    <SelectItem value="short">Short Game</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Desired Area</Label>
                <Input
                  placeholder="Enter your preferred location"
                  value={introRequest.desiredArea}
                  onChange={(e) => handleIntroRequestChange(e, "desiredArea")}
                />
              </div>
              <div className="grid gap-2">
                <Label>Preferred Time</Label>
                <Select
                  onValueChange={(value) => handleSelectChange(value, "time")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekday">Weekdays</SelectItem>
                    <SelectItem value="weekend">Weekends</SelectItem>
                    <SelectItem value="evening">Evenings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Number of Lessons</Label>
                <Select
                  onValueChange={(value) => handleSelectChange(value, "count")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of lessons" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Lesson</SelectItem>
                    <SelectItem value="5">5 Lessons</SelectItem>
                    <SelectItem value="10">10 Lessons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Request Message</Label>
                <Textarea
                  placeholder="Write your message to the pro"
                  value={introRequest.message}
                  onChange={(e) => handleIntroRequestChange(e, "message")}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => setShowIntroRequest(false)}
                className="!rounded-button"
              >
                Send Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Intro History Dialog */}
        <Dialog open={showIntroHistory} onOpenChange={setShowIntroHistory}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Introduction History</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {introHistory.map((intro) => (
                <Card key={intro.id} className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{intro.pro}</h3>
                      <Badge
                        variant={
                          intro.status === "accepted" ? "default" : "secondary"
                        }
                      >
                        {intro.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{intro.date}</p>
                    <p className="text-sm">{intro.message}</p>
                    {intro.status === "accepted" && (
                      <div className="mt-2 p-2 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium">Contact Info:</p>
                        <p className="text-sm text-gray-600">{intro.contact}</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        {/* Pro Intro Requests Dialog */}
        <Dialog open={showIntroRequests} onOpenChange={setShowIntroRequests}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Introduction Requests</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {introRequests.map((request) => (
                <Card key={request.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{request.member}</h3>
                      <Badge variant="secondary">{request.status}</Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="font-medium">Area:</span> {request.area}
                      </p>
                      <p>
                        <span className="font-medium">Time:</span> {request.time}
                      </p>
                      <p>
                        <span className="font-medium">Count:</span>{" "}
                        {request.count}
                      </p>
                      <p className="text-gray-600">{request.message}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 !rounded-button"
                        onClick={() => {
                          // Handle accept logic
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 !rounded-button"
                        onClick={() => {
                          // Handle reject logic
                        }}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        {/* Profile Settings Dialog */}
        <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로필 설정</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-between">
                <Label>프로필 공개</Label>
                <Switch
                  checked={proProfile.isPublic}
                  onCheckedChange={(checked) =>
                    setProProfile({ ...proProfile, isPublic: checked })
                  }
                />
              </div>
              <p className="text-sm text-gray-500">
                비공개 설정 시 기존 회원만 프로필을 볼 수 있습니다.
              </p>
            </div>
            <DialogFooter>
              <Button onClick={handleProfileSettings} className="!rounded-button">
                저장하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Point Exchange Dialog */}
        <Dialog open={showPointExchange} onOpenChange={setShowPointExchange}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Exchange Points</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="text-center text-sm text-gray-500 mb-4">
                5% fee applies to point exchanges
              </div>
              <div className="grid gap-2">
                <Label>Exchange Amount</Label>
                <Input type="number" placeholder="Enter points to exchange" />
                <div className="text-sm text-gray-500">
                  Available: 2,450 points
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Exchange Amount</span>
                  <span>2,000 points</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Fee (5%)</span>
                  <span>100 points</span>
                </div>
                <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                  <span>Final Amount</span>
                  <span>1,900 points</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button className="!rounded-button">Confirm Exchange</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Point Use Dialog */}
        <Dialog open={showPointUse} onOpenChange={setShowPointUse}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Use Points</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="text-center text-sm text-gray-500 mb-4">
                Use points for platform services
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Premium Membership",
                    points: 1000,
                    duration: "1 month",
                  },
                  {
                    name: "Pro Lesson Package",
                    points: 2000,
                    duration: "5 lessons",
                  },
                  { name: "Equipment Rental", points: 500, duration: "Per use" },
                ].map((service, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-600">
                          {service.duration}
                        </p>
                      </div>
                      <Button variant="outline" className="!rounded-button">
                        Use {service.points}P
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {/* Rating Dialog */}
        <Dialog open={showRatingDialog} onOpenChange={setShowRatingDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Rate Your Lesson</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setCurrentRating(rating)}
                    className="text-2xl"
                  >
                    <i
                      className={`fas fa-star ${rating <= currentRating ? "text-yellow-400" : "text-gray-300"}`}
                    ></i>
                  </button>
                ))}
              </div>
              <div className="grid gap-2">
                <Label>Your Review</Label>
                <Textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share your experience with the pro..."
                  className="h-32"
                />
              </div>
              <div className="text-xs text-gray-500">
                * Malicious or false reviews may be removed to maintain a healthy
                review culture
              </div>
            </div>
            <DialogFooter>
              <Button className="!rounded-button">Submit Review</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Reviews Dialog */}
        <Dialog open={showReviewsDialog} onOpenChange={setShowReviewsDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Reviews</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-green-700">4.8</div>
                <div className="flex justify-center gap-1 text-yellow-400 my-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-sm text-gray-600">Based on 128 reviews</div>
              </div>
              <div className="space-y-4">
                {proReviews.map((review) => (
                  <Card key={review.id} className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{review.memberName}</span>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <i key={i} className="fas fa-star text-sm"></i>
                            ))}
                          </div>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-[375px] bg-white border-t rounded-b-xl">
          <div className="grid grid-cols-5 h-16">
            {[
              { icon: "home", label: "탐색" },
              { icon: "handshake", label: "소개" },
              { icon: "user", label: "프로필" },
              { icon: "search", label: "검색" },
              { icon: "trophy", label: "리워드" }
            ].map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center justify-center gap-1"
                onClick={() => setSelectedTab(item.label)}
              >
                <i
                  className={`fas fa-${item.icon} ${selectedTab === item.label ? "text-green-700" : "text-gray-400"}`}
                ></i>
                <span
                  className={`text-xs ${selectedTab === item.label ? "text-green-700" : "text-gray-400"}`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
